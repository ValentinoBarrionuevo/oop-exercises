import { Persona } from "./Persona"
import Visitante from "./Visitante"
import Guardia from "./Guardia"

const MiPersona = new Persona("Juan", "Perez")
const MiVisita = new Visitante("Fausto", "Sarmiento", 17607849)
const MiGuardia = new Guardia("Manuel", "Tomas")

console.log(MiPersona.presentarse());
console.log(MiVisita.presentarse());
console.log(MiGuardia.presentarse());
console.log(MiGuardia.controlarDocumento(MiVisita))