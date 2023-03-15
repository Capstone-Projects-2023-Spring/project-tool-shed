import {Loader} from '@googlemaps/js-api-loader';
import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';

const SearchTools = (function(apiKey) {
	const getBrowserCoords = () => new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			reject(new Error('Browser doesn\'t support geolocation.'));
		} else {
			navigator.geolocation.getCurrentPosition(pos => {
				resolve({lat: pos.coords.latitude, lon: pos.coords.longitude});
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

	const SearchTools = ({}) => {
		const [results, setResults] = useState([]);
		const [coords, setCoords] = useState();
		const [searchQuery, setSearchQuery] = useState('');
		const [searchRadius, setSearchRadius] = useState(10);

		const [map, setMap] = useState();

		const mapRef = useRef();

		useEffect(() => {
			if (window.isSecureContext) {
				getBrowserCoords().then(setCoords);
			} else {
				setCoords({lat: 39.98020784788337, lon: -75.15746555080395});
			}
		}, []);


		useEffect(() => {
			if (!coords) return;
			console.log(coords, searchQuery, searchRadius);
			fetch(`/listings/search.json?searchQuery=${encodeURIComponent(searchQuery)}&searchRadius=${searchRadius}&userLat=${coords.lat}&userLon=${coords.lon}&useUserAddress=false`).then(x => x.json()).then(x => {
				setResults(x.results);
			});
		}, [coords, searchQuery, searchRadius]);

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
				const {geocoded_lat, geocoded_lon} = res.tool.owner.address;
				const title = 'Tool';
				const position = {lat: geocoded_lat, lng: geocoded_lon};
				const marker = new google.maps.Marker({position, map, title});

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
					<input placeholder='Search query...' value={searchQuery} onChange={x => setSearchQuery(x.target.value)} />
					<input value={searchRadius} type="range" min="1" max="30" step="0.25" onChange={x => setSearchRadius(x.target.value)} />
				</div>
				<div className="SearchTools__Map" style={style.map} ref={mapRef} />
			</div>;
	};

	return SearchTools;
})(GOOGLE_MAPS_API_KEY); // see webpack.config.js

export default SearchTools;


