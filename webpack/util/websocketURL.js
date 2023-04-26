
const websocketURL = key => ((window.location.protocol === "https:") ? "wss" : "ws") + `://${window.location.host}/websocket/${key}`;

export default websocketURL;
