"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Brazo_1 = require("./Brazo");
var Sensor_1 = require("./Sensor");
var Taser_1 = require("./Taser");
var Drone_1 = require("./Drone");
var drone = new Drone_1.Drone(100, 200);
var herramientas = [
    new Sensor_1.Sensor(),
    new Taser_1.Taser(),
    new Brazo_1.Brazo()
];
for (var _i = 0, herramientas_1 = herramientas; _i < herramientas_1.length; _i++) {
    var h = herramientas_1[_i];
    drone.setHerramienta(h);
    drone.mostrarInfo();
    console.log("------");
}
