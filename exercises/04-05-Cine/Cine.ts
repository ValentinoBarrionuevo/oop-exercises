class Cine {
    private pelicula: string;
    private horario: string;

    constructor(pelicula: string, horario: string){
        this.pelicula = pelicula;
        this.horario = horario;
    }

    public setpelicula(): string{
        return this.pelicula;
    }
    public sethorario(): string{
        return this.horario;
    }
    public getpelicula(): string{
        return this.pelicula;
    }
    public gethorario(): string{
        return this.horario;
    }

    public obtenerCartelera(): string{
        return `Pelicula: ${this.getpelicula()} | Horario: ${this.gethorario()}`;
    }
}

const MiCine = new Cine ("Cuestion de Tiempo", "20:30")

console.log(`Pelicula y horario: ${MiCine.obtenerCartelera()}`)