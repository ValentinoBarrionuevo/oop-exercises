 export class Persona {
    private nombre: string;
    private apellido: string;

    constructor(nombre: string, apellido: string){
        this.nombre = nombre
        this.apellido = apellido
    }

    public getNombre(): string{
        return this.nombre;
    }
    public setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    public getApellido(): string{
        return this.apellido;
    }
    public setApellido(nuevoApellido: string): void {
        this.apellido = nuevoApellido;
    }

    presentarse(): string {
        return (`${this.getNombre()}, ${this.getApellido()}`)
    }
}
