
const greeting: string = 'Hello, TypeScript!'; 
console.log(greeting);
export class Cine {
    private pelicula: string;
    private horario: string;

    constructor(pelicula: string, horario: string) {
        this.pelicula = pelicula;
        this.horario = pelicula;
    }

    private getpelicula(): string {
        return this.pelicula;
    }
    private gethorario(): string {
        return this.horario;
    }

    public obtenerCartelera(): string {
        return this.pelicula;
        return this.horario;
    }


    setobtenerCartelera(): string {
        return this.pelicula;
        return this.horario;
    }
}

