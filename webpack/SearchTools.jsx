import { Loader } from '@googlemaps/js-api-loader';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import {
	Select, Box, Heading, Divider, Container, Flex,
	FormControl, FormLabel, FormErrorMessage, FormHelperText,
	Accordion, AccordionItem, AccordionButton, AccordionPanel,
	Input, Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb
} from '@chakra-ui/react';
import { AsyncSelect } from 'chakra-react-select';
import { debounce } from 'debounce';

import getBrowserCoords from './util/getBrowserCoords';

const defaultApiKey = GOOGLE_MAPS_API_KEY; // see webpack.config.js, module.exports.plugins
const defaultCoordinates = { lat: 39.98020784788337, lon: -75.15746555080395 }; // temple university
const defaultSearchRadius = 10;
const defaultUserRating = 1;

const SelectorDropdown = ({name, collection, onChange, ...props}) => {
	const [isLoading, setLoading] = useState(false);

	const searchCollection = s => fetch(`/api/search/${collection}?q=${encodeURIComponent(s)}`, {
		method: "GET",
		credentials: "same-origin"
	}).then(x => x.json()).then(x => x.results);

	return (
		<AsyncSelect
			isClearable
			defaultOptions
			{...props}
			isDisabled={isLoading}
			isLoading={isLoading}
			onChange={o => onChange(o)}
			getOptionLabel={e => e.__isNew__ ? e.label : e.name}
			getOptionValue={e => e.__isNew__ ? undefined : e.id}
			loadOptions={searchCollection} />
	);
};

const videoCategories = [
	{
		name: 'Cleaning & Tool Safety',
		videos: [
			"https://www.youtube.com/embed/DuU2mnJcxPM",
			"https://www.youtube.com/embed/CHTHif55nSw",
			"https://www.youtube.com/embed/y7mz191MkT0",
		]
	},
	{
		name: 'Picking the Right Brand For You',
		videos: [
			"https://www.youtube.com/embed/4sNsJEJS0x4",
			"https://www.youtube.com/embed/Wr-UShXL0OA",
			"https://www.youtube.com/embed/FT_qDGTwMfg",
		]
	},
	{
		name: 'Popular Tool Guides',
		videos: [
			"https://www.youtube.com/embed/usuXK9CL6Ns",
			"https://www.youtube.com/embed/VXvzBPlAeDM",
			"https://www.youtube.com/embed/puGg_UzpVo4",
		]
	}
];

const VideoLibrary = ({}) => {
	return (
		<Accordion allowMultiple>
  			<AccordionItem>
    				<AccordionButton>Video Library</AccordionButton>
				<AccordionPanel>
					<Accordion allowMultiple>
					{videoCategories.map(({name, videos}) => <>
					<AccordionItem>
        	  				<AccordionButton>{name}</AccordionButton>
          					<AccordionPanel>
							<Flex>
							{videos.map(v => <>
								<Box mr={75}>
                							<iframe src={v} width="560" height="315" title="Cleaning/Saftey Video 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
								</Box>
							</>)}
							</Flex>
						</AccordionPanel>
					</AccordionItem>
					</>)}
					</Accordion>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

const SearchTools = ({ apiKey = defaultApiKey }) => {
	const [results, setResults] = useState([]);
	const [coords, setCoords] = useState();
	const [searchQuery, setSearchQuery] = useState('');
	const [searchRadius, setSearchRadius] = useState(defaultSearchRadius);
	const [selectedCategory, setSelectedCategory] = useState();
	const [selectedMaker, setSelectedMaker] = useState();
	const [userRating, setuserRating] = useState(defaultUserRating);
	//const [videoId1, setVideoId1] = useState('');
	//const [videoId2, setVideoId2] = useState('');
	//const [videoId3, setVideoId3] = useState('');

	const [map, setMap] = useState();
	const mapRef = useRef();

	useEffect(() => {
		getBrowserCoords(defaultCoordinates).then(setCoords);
	}, []);

	useEffect(debounce(() => {
		if (!coords) return;

		const params = {
			searchQuery,
			searchRadius,
			userRating,
			userLat: coords.lat,
			userLon: coords.lon,
			useUserAddress: 'false',
		};

		if (selectedMaker) {
			params.makerId = selectedMaker.id;
		}

		if (selectedCategory) {
			params.categoryId = selectedCategory.id;
		}

		const paramsString = Object.entries(params).map(([k,v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
		fetch(`/api/listings/search.json?${paramsString}`)
			.then(x => x.json())
			.then(x => setResults(x.results));
	}, 200), [coords, searchQuery, searchRadius, selectedCategory, selectedMaker, userRating]);

	useLayoutEffect(() => {
		if (!mapRef.current) return;

		const loader = new Loader({ apiKey, version: 'weekly' });
		loader.load().then(() => {
			const _map = new google.maps.Map(mapRef.current, {
				zoom: 8,
				streetViewControl: false,
				mapTypeControl: false,
				mapTypeControlOptions: { mapTypeIds: ['roadmap'] }
			});
			_map.addListener('center_changed', () => {
				const pt = _map.getCenter();
				let update = {
					lat: pt.lat(),
					lon: pt.lng()
				};
				setCoords(update);
			});

			_map.addListener('zoom_changed', () => {

			});
			setMap(_map);
		});
	}, [mapRef.current]);

	useLayoutEffect(() => {
		if (!coords || !map) return;

		const pt = map.getCenter();
		if (!pt || pt.lng() !== coords.lon || pt.lat() !== coords.lat) {
			console.log(coords, map);
			map.setCenter({ lng: coords.lon, lat: coords.lat });
		}

		let radiusVisualization = new google.maps.Circle({
			center: { lng: coords.lon, lat: coords.lat },
			radius: searchRadius * 1000, // in meters
			strokeColor: "#FFF",
			strokeOpacity: 0.0,
			strokeWeight: 0,
			fillColor: "#0000FF",
			fillOpacity: 0.2
		});
		radiusVisualization.setMap(map);

		return () => {
			radiusVisualization.setMap(null);
		}

	}, [searchRadius, coords, map]);

	useLayoutEffect(() => { // TEST WITH TOOL NAMES
		if (!map) return;

		let markers = [];
		for (const res of results) {
			const { geocoded_lat, geocoded_lon } = res.tool.owner.address;
			const name = res.tool.name;
			const description = res.tool.description;
			const listing_id = res.id;
			const rating = res.tool.owner.avg_rating;
			const position = { lat: geocoded_lat, lng: geocoded_lon };
			const owner_id = res.tool.owner_id;
			const first_name = res.tool.owner.first_name;
			const last_name = res.tool.owner.last_name;

			// create a custom marker icon
			const icon = {
				url: '../public/handman_icon.png',
				scaledSize: new google.maps.Size(50, 50),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(25, 25),
			};

			// set the custom marker icon as the icon of the marker and add title
			const marker = new google.maps.Marker({
				position,
				map,
				title: name, // <-- set the tool name as the marker title
			});

			const infoWindow = new google.maps.InfoWindow({
				content: `<div style="font-size: 14px; line-height: 1.5; width: 250px;">
							<h3 style="margin: 0 0 10px;">${name}</h3>
							<p style="margin: 0 0 5px;">${description}</p>
							<div style="display: block; margin-top: 5px;">&#128295; Click to see details &#128295;</div>
						  </div>`
			});


			// add an event listener for the "mouseover" event
			marker.addListener("mouseover", () => {
				infoWindow.open(map, marker);
			});

			// add an event listener for the "mouseout" event
			marker.addListener("mouseout", () => {
				infoWindow.close();
			});

			// add an event listener for the "click" event
			marker.addListener("click", () => {
				// Placeholder.  This will be modified to the production site details page
				// For now, routing to localhost listing details page
				window.location.href = `/listing/${listing_id}/details`;
			});

			markers.push(marker);
		}

		return () => {
			for (const m of markers) {
				m.setMap(null);
			}
		};
	}, [map, results]);


	const labelStyles = { mt: '2', ml: '-2.5', fontSize: 'sm' };
	const sliderValueStyle = { textAlign: 'center', bg: 'blue.500', color: 'white', mt: '-10', ml: '-5', w: '12' };
	const maxDist = 200;

	return (
		<>
			<Box className="SearchTools" w="100%" border="1px solid #E2E8F0" borderRadius="md" p={4}>
				<FormControl mb={4} mr={4}>
					<FormLabel>Search Query</FormLabel>
					<Input placeholder='Enter search query here...' value={searchQuery} onChange={x => setSearchQuery(x.target.value)} />
				</FormControl>
				<FormControl mb={4}>
					<FormLabel>User Rating</FormLabel>
					<Box mt={10} mb={10}>
						<Slider w='100%' defaultValue={defaultUserRating} max={5} step={1} onChange={x => setuserRating(x)}>
							<SliderTrack>
								<SliderFilledTrack bg="blue.500" />
							</SliderTrack>
							<SliderThumb zIndex={0} bg="blue.500" />
							<SliderMark value={1} {...labelStyles} pl={1.5}>1</SliderMark>
							<SliderMark value={2} {...labelStyles} pl={1.5}>2</SliderMark>
							<SliderMark value={3} {...labelStyles} pl={1.5}>3</SliderMark>
							<SliderMark value={4} {...labelStyles} pl={1.5}>4</SliderMark>
							<SliderMark value={5} {...labelStyles} pl={1.5}>5</SliderMark>
							<SliderMark value={userRating} {...sliderValueStyle} w={50} ml={-6}>{userRating} Star</SliderMark>
						</Slider>
					</Box>
				</FormControl>
				<FormControl mb={4}>
					<FormLabel>Tool Category</FormLabel>
					<SelectorDropdown collection="category" placeholder="Select Category" onChange={x => setSelectedCategory(x)} />
				</FormControl>
				<FormControl mb={4}>
					<FormLabel>Tool Maker</FormLabel>
					<SelectorDropdown collection="maker" placeholder="Select Maker" onChange={x => setSelectedMaker(x)} />
				</FormControl>
				<Divider my={4} />
				<FormControl mb={4}>
					<FormLabel>Search Radius</FormLabel>
					<Box mt={10} mb={10}>
						<Slider w='100%' defaultValue={defaultSearchRadius} max={200} onChange={x => setSearchRadius(x)}>
							<SliderTrack>
								<SliderFilledTrack bg="blue.500" />
							</SliderTrack>
							<SliderThumb zIndex={0} bg="blue.500" />
							<SliderMark value={50} {...labelStyles}>50km</SliderMark>
							<SliderMark value={100} {...labelStyles}>100km</SliderMark>
							<SliderMark value={150} {...labelStyles}>150km</SliderMark>
							<SliderMark value={searchRadius} {...sliderValueStyle}>{searchRadius}km</SliderMark>
						</Slider>
					</Box>
				</FormControl>
				<Divider my={4} />
				<Box h={500} w='100%' className="SearchTools__Map" ref={mapRef} border="1px solid #E2E8F0" borderRadius="md" />
			</Box>
			<VideoLibrary />
		</>
	);
};


export default SearchTools;

