class WebsocketManager {
	constructor() {
		this.map = {};
	}

	_ensure(user, key) {
		if (!user) throw new Error("user is falsey");
		if (!key) throw new Error('key is falsey');
		// ensure this._map is properly formed
		if (!this._map[user]) this._map[user] = {};
		if (!this._map[user][key]) this._map[user][key] = [];
	}

	/**
	 * Sends a message to all websockets belonging to a user
	 * that match a given `key`.
	 * @param {any} userId A user ID, UUID, etc
	 * @param {any} key Preferrably a string or int, used to organize websockets based on what kind of data they expect/work with.
	 * @param {string} data The data to send.
	 * @param {function} onData Called when the websocket gets a message. Takes one parameter, the message string. Optional.
	 */
	add(userId, key, ws, onData = null) {
		this._ensure(userId, key);

		// store the websocket
		let el = {ws, onData};
		this._map[userId][key].push(el);

		// removes the socket (by reference)
		// from this._map
		const removeSocket = () => this._map[userId][key] = this._map[userId][key].filter(x => x !== el);

		// ensure that the websocket is removed from the data structure when its closed.
		ws.addEventListener('close', (code, reason) => {
			removeSocket();
		});

		// if we get an error on the websocket, bail.
		ws.addEventListener('error', (error) => {
			removeSocket();
		});

		// Call our onData function
		ws.addEventListener('message', e => {
			if (onData) {
				onData(e.data);
			}
		});
	}
	/**
	 * Sends a message to all websockets belonging to a user
	 * that match a given `key`.
	 * @param {any} userId A user ID, UUID, etc
	 * @param {any} key Preferrably a string or int, used to organize websockets based on what kind of data they expect/work with.
	 * @param {string} data The data to send.
	 * @param {object} options Options to be passed to WebSocket.send()
	 */
	send(userId, key, data, options = {}) {
		this._ensure(userId, key);
		return new Promise((resolve, reject) => {
			let wses = this._map[userId][key];
			let promises = [];
			for (const {ws} of wses) {
				promises.push(new Promise((_resolve, _reject) => {
					ws.send(data, options, function(err) {
						if (err) {
							_reject(err);
						} else {
							_resolve();
						}
					});
				}));
			}
			Promise.all(promises).then(resolve);
		});
	}
}

module.exports = WebsocketManager;
