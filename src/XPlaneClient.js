
// API actions 
const SUBSCRIBE = "subscribe";

// Fields
const DATAREF = "dataref";
const KEY = "key";
const REFRESH = "refresh";
const TYPE = "type";

const CONNECTING = 0;
const OPEN = 1;
const CLOSING = 2;
const CLOSED = 3;

class XPlaneClient {

    constructor(uri, updatedCallback) {
        this.msgQueue = [];
        this.websocket = new WebSocket(uri);
        this.websocket.onopen = this._ws_onopen.bind(this);
        this.websocket.onclose = this._ws_onclose.bind(this);
        this.websocket.onmessage = this._ws_onmessage.bind(this);
        this.websocket.onerror = this._ws_onerror.bind(this);
        this.updatedCallback = updatedCallback;
    }

    _ws_onopen(evt) {
        console.log("XPlaneHubClient: WebSocket opened");
        while (this.msgQueue.length > 0) {
            this._ws_send(this.msgQueue.pop());
        }
    }

    _ws_onclose(evt) {
        console.log("XPlaneHubClient: WebSocket closed");
    }

    _ws_onmessage(evt) {
        // console.log("XPlaneHubClient: Message recieved");
        this.updatedCallback(JSON.parse(evt.data));
    }

    _ws_onerror(evt) {
        console.log("XPlaneHubClient: Websocket error ");
        console.log(evt);
    }

    _ws_send(msg) {
        if (this.websocket.readyState == CONNECTING) {
            this.msgQueue.push(msg);
        } else { 
            var m = JSON.stringify(msg);
            // console.log(msg);
            this.websocket.send(m);
        }
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

export default XPlaneClient;