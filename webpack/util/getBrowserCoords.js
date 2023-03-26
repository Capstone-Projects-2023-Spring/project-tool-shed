
const getBrowserCoords = (defaultCoords = null) => new Promise((resolve, reject) => {
		if (!navigator.geolocation || !window.isSecureContext) {
			if (defaultCoords) {
				resolve({ lat: defaultCoords.lat, lon: defaultCoords.lon });
			} else {
				reject(new Error('Browser doesn\'t support geolocation.'));
			}
		} else {
			navigator.geolocation.getCurrentPosition(pos => {
				resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude });
			});
		}
});

export default getBrowserCoords;
