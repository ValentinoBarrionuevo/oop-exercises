import { Persona } from "./Persona"
import Visitante from "./Visitante"

export default class Guardia extends Persona {
    public presentarse(): string {
        return (`Hola, mi nombre es ${this.getNombre()} ${this.getApellido()} y soy el guardia`)
    }

    public controlarDocumento(visitante: Visitante): string {
        return (`Adelante ${visitante.getNombre()}, ${visitante.getApellido()}: con dni ${visitante.getDni()}`);
    }

}

