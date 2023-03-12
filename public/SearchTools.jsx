

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

        const loadUMDScript = async (url, module = {exports:{}}) =>
  (Function('module', 'exports', await (await fetch(url)).text()).call(module, module, module.exports), module).exports

	const {useState, useEffect, useLayoutEffect, useRef} = React;

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
			getBrowserCoords().then(setCoords);
		}, []);


		useEffect(() => {
			if (!coords) return;
			fetch(`/listings/search.json?searchQuery=${encodeURIComponent(searchQuery)}&searchRadius=${searchRadius}&userLat=${coords.lat}&userLon=${coords.lon}&useUserAddress=false`).then(x => x.json()).then(x => {
				debugger;
				setResults(x.results);
			});
		}, [coords]);

		useLayoutEffect(() => {
			if (!coords || !mapRef.current) return;

			loadUMDScript('/node_modules/@googlemaps/js-api-loader/dist/index.umd.js').then(({Loader, Map}) => {
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
});
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

				</div>
				<div className="SearchTools__Map" style={style.map} ref={mapRef} />
			</div>;
	};

	return SearchTools;
})('<api key here>');
