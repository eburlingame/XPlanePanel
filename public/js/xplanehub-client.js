
// API actions 
const SUBSCRIBE = "subscribe";

// Fields
const DATAREF = "dataref";
const KEY = "key";
const REFRESH = "refresh";
const TYPE = "type";

class XPlaneHubClient {
    constructor(uri) {
        this.data = {};
        this.websocket = new WebSocket(uri);
        this.websocket.onopen = this._ws_onopen;
        this.websocket.onclose = this._ws_onclose;
        this.websocket.onmessage = this._ws_onmessage;
        this.websocket.onerror = this._ws_onerror;
    }

    _ws_onopen(evt) {
        console.log("XPlaneHubClient: WebSocket opened");
    }

    _ws_onclose(evt) {
        console.log("XPlaneHubClient: WebSocket closed");
    }

    _ws_onmessage(evt) {
        console.log("XPlaneHubClient: Message recieved");
        console.log(evt.data);
    }

    _ws_onerror(evt) {
        console.log("XPlaneHubClient: Websocket error ");
        console.log(evt);
    }

    _ws_send(msg) {
        var m = JSON.stringify(msg);
        console.log("Sending message");
        console.log(msg);
        this.websocket.send(m);
    }

    subscribe(dataref, key, refresh_ms, type) {
        this._ws_send({
            "subscribe" : [{
                "dataref": dataref,
                "key": key,
                "refresh": refresh_ms,
                "type": type
            }]
        });
    }

    unsubscribe(key) {
        this._ws_send({
            "unsubscribe" : [{"key": key}]
        });
    }

    add_field(dataref, key, type) {
        this._ws_send({
            "add_fields" : [{
                "dataref": dataref,
                "key": key,
                "type": type
            }]
        });
    }

    remove_field(key) {
        this._ws_send({
            "remove_field" : [{"key": key}]
        });
    }
}