import { Herramienta } from "./Herramienta";

export class Drone {
    private velocidadBase: number
    private altura: number
    private herramienta?: Herramienta

    constructor(velocidadBase: number, alturaBase: number) {
        this.velocidadBase = velocidadBase;
        this.altura = alturaBase;
    }

    setHerramienta(h: Herramienta) {
       this.herramienta = h;
    }
    
    
    calcularVelocidad(): number {
        if (!this.herramienta) { 
            return this.velocidadBase;
        }

        let exceso = this.herramienta.peso - 200;
        let bloques = 0;

        while (exceso >= 50) {
            bloques++;
            exceso = exceso - 50;
        }

        let penalizacion = this.velocidadBase * (bloques * 0.02);
        return this.velocidadBase - penalizacion
        

    }
    calcularAltura(): number {
        if (!this.herramienta) {
            return this.velocidadBase
        }
    let exceso = this.herramienta.peso - 200;
    let bloques = 0;

    while (exceso >= 50) {
        bloques++;
        exceso = exceso - 50;
    }

    let penalizacion = this.altura * (bloques * 0.05);
    return this.altura - penalizacion;
    }

    mostrarInfo() {
        if(!this.herramienta) {
            console.log("El dron no tiene herramienta asignada..");
        } else {
            console.log("Herramienta:", this.herramienta.tipo);
            console.log("Peso:", this.herramienta.peso, "gramos");
            console.log("Velocidad:", this.calcularVelocidad(), "mts/s");
            console.log("Altura:", this.calcularAltura(), "mts");
        }
    }
}