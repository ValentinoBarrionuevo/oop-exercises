import { Traccion } from "./Traccion";

export class Robot {
    numeroSerie: string;
    ptb: number;
    traccion?: Traccion;

    constructor(numeroSerie: string, ptb: number) {
        this.numeroSerie = numeroSerie;
        this.ptb = ptb;
    }

    setTraccion(t: Traccion) {
        this.traccion = t;
    }

    mostrarInfo() {
        if (!this.traccion) {
            console.log(`Robot ${this.numeroSerie} sin traccion asignada`);
            return; 
        }
    
    const potenciaFinal = this.ptb - this.traccion.hpRestado;   

    console.log(`
        Numero de serie: ${this.numeroSerie}
        Potencia final: ${potenciaFinal} hp
        Tipo de traccion: ${this.traccion.tipo}
        Avance maximo: ${this.traccion.distanciaMax} km
        Extra: ${this.traccion.getInfo()}
        `);
    }
}