import { Persona } from "./Persona"
import Visitante from "./Visitante"

export default class Guardia extends Persona {
    public presentarse(): string {
        return (`Hola, mi nombre es ${this.getNombre()} ${this.getApellido()} y soy el guardia`)
    }

    public controlarDocumento(dni: number): string {
        return (`Adelante ${this.getNombre()}: ` + dni);
    }

}

