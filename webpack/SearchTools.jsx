import { Loader } from '@googlemaps/js-api-loader';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { categories } from '../public/categories'; // Import the categories array


const SearchTools = (function (apiKey) {
	const getBrowserCoords = () => new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			reject(new Error('Browser doesn\'t support geolocation.'));
		} else {
			navigator.geolocation.getCurrentPosition(pos => {
				resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude });
			});
		}
	});

	const style = {
		map: {
			height: 500,
			width: '100%'
		},
		filters: {

		}
	};

	const SearchTools = ({ }) => {
		const [results, setResults] = useState([]);
		const [coords, setCoords] = useState();
		const [searchQuery, setSearchQuery] = useState('');
		const [searchRadius, setSearchRadius] = useState(10);
		const [selectedCategory, setSelectedCategory] = useState('');



		const [map, setMap] = useState();

		const mapRef = useRef();

		useEffect(() => {
			if (window.isSecureContext) {
				getBrowserCoords().then(setCoords);
			} else {
				setCoords({ lat: 39.98020784788337, lon: -75.15746555080395 });
			}
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

			fetch(`/listings/search.json?searchQuery=${encodeURIComponent(newSearchQuery)}&searchRadius=${searchRadius}&userLat=${coords.lat}&userLon=${coords.lon}&useUserAddress=false`)
				.then(x => x.json())
				.then(x => {
					setResults(x.results);
				});
		}, [coords, searchQuery, searchRadius, selectedCategory]);






		useLayoutEffect(() => {
			if (!coords || !mapRef.current) return;

			//loadUMDScript('/node_modules/@googlemaps/js-api-loader/dist/index.umd.js').then(({Loader, Map}) => {
			const loader = new Loader({
				apiKey,
				version: 'weekly'
			});
			return loader.load().then(() => {
				const _map = new google.maps.Map(mapRef.current, {
					center: { lat: coords.lat, lng: coords.lon },
					zoom: 8
				});
				setMap(_map);
			});
			//});
		}, [coords, mapRef.current]);

		useLayoutEffect(() => {
			if (!map) return;

			let markers = [];
			for (const res of results) {
				const { geocoded_lat, geocoded_lon } = res.tool.owner.address;
				const title = 'Tool';
				const position = { lat: geocoded_lat, lng: geocoded_lon };
				const marker = new google.maps.Marker({ position, map, title });

				markers.push(marker);
			}

			return () => {
				for (const m of markers) {
					m.setMap(null);
				}
			};
		}, [map, results]);

		return <div className="SearchTools">
			<div className="SearchTools__Filters" style={style.filters}>
				<label>
					Search query:
					<input
						placeholder='Enter search query here...'
						value={searchQuery}
						onChange={x => setSearchQuery(x.target.value)}
					/>
				</label>

				<label>
					Search radius (miles):
					<input
						value={searchRadius}
						type="range"
						min="1"
						max="30"
						step="0.25"
						onChange={x => setSearchRadius(x.target.value)}
					/>
					<span>{searchRadius} miles</span>
				</label>

				<label>
					Categories:
					<select
						value={selectedCategory}
						onChange={(e) => setSelectedCategory(e.target.value)}
					>
						{categories.map((category) => (
							<option key={category.value} value={category.value}>
								{category.label}
							</option>
						))}
					</select>
				</label>
			</div>


			<div className="SearchTools__Map" style={style.map} ref={mapRef} />
		</div>;
	};

	return SearchTools;
})(GOOGLE_MAPS_API_KEY); // see webpack.config.js

export default SearchTools;


