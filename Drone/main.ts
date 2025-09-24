import { Herramienta } from "./Herramienta";
import { Brazo } from "./Brazo";
import { Sensor } from "./Sensor";
import { Taser } from "./Taser";
import { Drone } from "./Drone";

const drone = new Drone(100, 200)

const herramientas: Herramienta[] = [
    new Sensor(),
    new Taser(),
    new Brazo()
];

for (let h of herramientas) {
    drone.setHerramienta(h);
    drone.mostrarInfo();
    console.log("------")
}

