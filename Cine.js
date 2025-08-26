var Cine = /** @class */ (function () {
    function Cine(pelicula, horario) {
        this.pelicula = pelicula;
        this.horario = horario;
    }
    Cine.prototype.setpelicula = function () {
        return this.pelicula;
    };
    Cine.prototype.sethorario = function () {
        return this.horario;
    };
    Cine.prototype.getpelicula = function () {
        return this.pelicula;
    };
    Cine.prototype.gethorario = function () {
        return this.horario;
    };
    Cine.prototype.obtenerCartelera = function () {
        return "Pelicula: ".concat(this.getpelicula(), " | Horario: ").concat(this.gethorario());
    };
    return Cine;
}());
var MiCine = new Cine("Cuestion de Tiempo", "20:30");
console.log("Pelicula y horario: ".concat(MiCine.obtenerCartelera()));
