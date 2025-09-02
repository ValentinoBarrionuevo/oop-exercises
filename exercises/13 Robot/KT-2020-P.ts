import { Robot } from "./Robot";
import { RuedaCaucho } from "./RuedaCaucho";
import { Oruga } from "./Oruga";

const robot = new Robot("KT-2020-P", 10);

robot.setTraccion(new RuedaCaucho());
robot.mostrarInfo();

robot.setTraccion(new Oruga());
robot.mostrarInfo();