class Persona {
    private nombre: string;
    private apellido: string;

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public getnombre(): string {
        return this.nombre;
    }
    public setnombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    public getapellido(): string{
        return this.apellido;
    }
    public setapellido(nuevoApellido: string): void {
        this.apellido = nuevoApellido;
    }
}

class Visitante {
    private nombre: string;
    private apellido: string;

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getnombre(): string {
        return this.nombre
    }
    setnombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre
    }
    
    getapellido(): string {
        return this.apellido
    }
    setapellido(nuevoApellido: string): void {
        this.apellido = nuevoApellido
    }
}

class Guardia {
    private nombre: string;
    private apellido: string;

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre
        this.apellido = apellido
    }

    getnombre(): string {
        return this.nombre
    }
    setnombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre
    }

    getapellido(): string {
        return this.apellido
    }
    setapellido(nuevoApellido: string): void {
        this.apellido = nuevoApellido
    }
}

const MiPersona = new Persona("Sergio", "Barrionuevo")
const MiVisita = new Visitante("Juan", "Barrionuevo")
const MiGuardia = new Guardia("Mish", "Barrionuevo")

console.log (`Persona: ${MiPersona.getnombre()} ${MiPersona.getapellido()}`)
console.log (`Vistante: ${MiVisita.getnombre()} ${MiVisita.getapellido()}`)
console.log (`Guardia: ${MiGuardia.getnombre()} ${MiGuardia.getapellido()}`)