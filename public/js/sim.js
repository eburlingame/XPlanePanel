
// XPlaneHub Client Wrapper
class Sim {
  constructor() {
    this.requestAnimationFrame();
  }

  findAndGetParameter(fieldName) {
    return 0;
  }

  getParameter(fieldName) {
    return 0;
  }

  setParameter(fieldName, value) {
    return 0;
  }

  setUpdateCallback(f) {
    this.updateCallback = f;
  }

  setInitializedCallback(f) {
    this.initializedCallback = f;
  }

  reset(script, nodes) {
    this.script = script;
    this.willReset = true;
    this.running = false;
  }

  doReset() {
    this.willReset = false;
    this.lastTimestamp = null;
    this.lastElapsed = 0;

    this.client = new XPlaneHubClient("ws://localhost:9002/");

    this.initializedCallback();
  }

  update(self, timestamp) {
    if (this.willReset) {
        this.doReset();
    }
    else if (this.running) {
        if (!Sim.lastTimestamp) {
            Sim.lastTimestamp = timestamp;
        }
        var elapsed = timestamp - Sim.lastTimestamp;
        Sim.lastElapsed = elapsed;
        Sim.lastTimestamp = timestamp;
        self.updateCallback(elapsed);
    }
    self.requestAnimationFrame();
  }

  requestAnimationFrame() {
    var self = this;
    window.requestAnimationFrame(function(ts) {
        self.update(self, ts);
    });
  }

  start() {
    this.running = true;
  }
}


var SIM = new Sim();