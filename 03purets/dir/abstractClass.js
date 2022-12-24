"use strict";
class Takephoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
//const m = new Takephoto("","");
//we cannot create instance of a abstract class.
class Instagram extends Takephoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("hey");
    }
}
// const m = new Instagram("","");
