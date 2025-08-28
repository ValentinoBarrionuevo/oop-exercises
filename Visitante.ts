import { Persona } from "./Persona"

export default class Visitante extends Persona {
    private dni: number 
    
    
    
    constructor(nombre: string, apellido: string, dni: number) {
    super(nombre, apellido);
        this.dni = dni;
    }

    public getDni(): number {
        return this.dni
    }
    public setDni(dni: number): void {
        this.dni = dni
    }


}
