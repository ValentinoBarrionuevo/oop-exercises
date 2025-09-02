import { Traccion } from "./Traccion";

export class Oruga implements Traccion {
    tipo = "Oruga";
    hpRestado = 3;
    distanciaMax = 400;
    getInfo(): string {
        return `${this.tipo}, resta ${this.hpRestado}hp, puede avanzar ${this.distanciaMax}km`;
    
    }
}