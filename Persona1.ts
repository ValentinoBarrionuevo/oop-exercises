class Persona1 {
    private nombre: string;
    private apellido: string;

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public getNombre(): string {
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
}

class Visitante1 {
    private nombre: string;
    private apellido: string;

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombre(): string {
        return this.nombre
    }
    setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre
    }
    
    getApellido(): string {
        return this.apellido
    }
    setApellido(nuevoApellido: string): void {
        this.apellido = nuevoApellido
    }
}

class Guardia1 {
    private nombre: string;
    private apellido: string;

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre
        this.apellido = apellido
    }

    getNombre(): string {
        return this.nombre
    }
    setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre
    }

    getApellido(): string {
        return this.apellido
    }
    setApellido(nuevoApellido: string): void {
        this.apellido = nuevoApellido
    }
}

const MiPersona = new Persona1("Sergio", "Barrionuevo")
const MiVisita = new Visitante1("Juan", "Barrionuevo")
const MiGuardia = new Guardia1("Mish", "Barrionuevo")

console.log (`Persona: ${MiPersona.getNombre()} ${MiPersona.getApellido()}`)
console.log (`Vistante: ${MiVisita.getNombre()} ${MiVisita.getApellido()}`)
console.log (`Guardia: ${MiGuardia.getNombre()} ${MiGuardia.getApellido()}`)