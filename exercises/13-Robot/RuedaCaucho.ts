import { Traccion } from "./Traccion"


export class RuedaCaucho implements Traccion {
    tipo = "Rueda de Caucho";
    hpRestado = 1;
    distanciaMax = 100;
    getInfo(): string {
        return `${this.tipo}, resta ${this.hpRestado}hp, puede avanzar ${this.distanciaMax} km`;
    }
}