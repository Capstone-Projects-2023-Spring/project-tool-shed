import { Loader } from '@googlemaps/js-api-loader';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import {
	ChakraProvider, Select, Box, Heading, Divider, Container, Flex,
	FormControl, FormLabel, FormErrorMessage, FormHelperText,
	Input, Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb
} from '@chakra-ui/react';

import getBrowserCoords from './util/getBrowserCoords';

const defaultApiKey = GOOGLE_MAPS_API_KEY; // see webpack.config.js, module.exports.plugins
const defaultCoordinates = { lat: 39.98020784788337, lon: -75.15746555080395 }; // temple university
const defaultSearchRadius = 10;
const defaultUserRating = 1;

const SearchTools = ({ apiKey = defaultApiKey, categories = [], makers = [] }) => {
	const [results, setResults] = useState([]);
	const [coords, setCoords] = useState();
	const [searchQuery, setSearchQuery] = useState('');
	const [searchRadius, setSearchRadius] = useState(defaultSearchRadius);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [userRating, setuserRating] = useState(defaultUserRating);
	//const [videoId1, setVideoId1] = useState('');
	//const [videoId2, setVideoId2] = useState('');
	//const [videoId3, setVideoId3] = useState('');

	const [map, setMap] = useState();
	const mapRef = useRef();

	useEffect(() => {
		getBrowserCoords(defaultCoordinates).then(setCoords);
	}, []);

	useEffect(() => {
		if (!coords) return;

		let newSearchQuery = '';
		// Determine the new search query based on the current searchQuery and selectedCategory values
		if (searchQuery === '' && selectedCategory !== '') {
			newSearchQuery = selectedCategory;
		} else if (searchQuery !== '' && selectedCategory === '') {
			newSearchQuery = searchQuery.replace(/\s+/g, '&');
		} else if (searchQuery !== '' && selectedCategory !== '') {
			// Replace any occurrences of multiple '&' symbols with a single '&' symbol
			newSearchQuery = (searchQuery.replace(/\s+/g, '&') + '&' + selectedCategory).replace(/&+/g, '&');
		}

		// Remove any leading or trailing '&' symbols
		newSearchQuery = newSearchQuery.replace(/^&+|&+$/g, '');

		fetch(`/api/listings/search.json?searchQuery=${encodeURIComponent(newSearchQuery)}&searchRadius=${searchRadius}&userLat=${coords.lat}&userLon=${coords.lon}&userRating=${userRating}&useUserAddress=false`)
			.then(x => x.json())
			.then(x => setResults(x.results));
	}, [coords, searchQuery, searchRadius, selectedCategory, userRating]);

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
				window.open(`http://localhost:5000/listing/${listing_id}/details`);
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
		<ChakraProvider>
			<Box className="SearchTools" w="100%" border="1px solid #E2E8F0" borderRadius="md" p={4}>
				<Container className="SearchTools__Filters" w='100%'>
					<FormControl mb={4}>
						<FormLabel>Search Query</FormLabel>
						<Input placeholder='Enter search query here...'
							value={searchQuery}
							onChange={x => setSearchQuery(x.target.value)} />
					</FormControl>

					<FormControl mb={4}>
						<FormLabel>Search Radius</FormLabel>
						<Box>
							<Slider w='100%' defaultValue={defaultSearchRadius} max={200} onChange={x => setSearchRadius(x)}>
								<SliderTrack>
									<SliderFilledTrack bg="blue.500" />
								</SliderTrack>
								<SliderThumb bg="blue.500" />
								<SliderMark value={50} {...labelStyles}>50km</SliderMark>
								<SliderMark value={100} {...labelStyles}>100km</SliderMark>
								<SliderMark value={150} {...labelStyles}>150km</SliderMark>
								<SliderMark value={searchRadius} {...sliderValueStyle}>{searchRadius}km</SliderMark>
							</Slider>
						</Box>
					</FormControl>

					<FormControl mb={4}>
						<FormLabel>Tool Category</FormLabel>
						<Select placeholder="Select category" onChange={x => setSelectedCategory(x)}>
							{categories.map(c => (
								<option key={c.value} value={c.value}>
									{c.label}
								</option>
							))}
						</Select>
					</FormControl>

					<FormControl mb={4}>
						<FormLabel>User Rating</FormLabel>
						<Box>
							<Slider w='100%' defaultValue={defaultUserRating} max={5} onChange={x => setuserRating(x)}>
								<SliderTrack>
									<SliderFilledTrack bg="blue.500" />
								</SliderTrack>
								<SliderThumb bg="blue.500" />
								<SliderMark value={1} {...labelStyles} pl={1.5}>1</SliderMark>
								<SliderMark value={2} {...labelStyles} pl={1.5}>2</SliderMark>
								<SliderMark value={3} {...labelStyles} pl={1.5}>3</SliderMark>
								<SliderMark value={4} {...labelStyles} pl={1.5}>4</SliderMark>
								<SliderMark value={5} {...labelStyles} pl={1.5}>5</SliderMark>
								<SliderMark value={userRating} {...sliderValueStyle} w={50} ml={-6}>{userRating} Star</SliderMark>
							</Slider>
						</Box>
					</FormControl>
				</Container>
				<Divider my={4} />
				<Box h={500} w='100%' className="SearchTools__Map" ref={mapRef} border="1px solid #E2E8F0" borderRadius="md" />
				<Divider my={4} />
				<Flex>
				  <Box mr={10}>
    				<iframe src={`https://www.youtube.com/embed/DuU2mnJcxPM`} width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  				  </Box>
				  <Box mr={10}>
    				<iframe src={`https://www.youtube.com/embed/CHTHif55nSw`} width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  				  </Box>
				  <Box mr={10}>
    				<iframe src={`https://www.youtube.com/embed/y7mz191MkT0`} width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  				  </Box>
				</Flex>
			</Box>
		</ChakraProvider>
	);
};



export default SearchTools;

