var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Persona.prototype.getnombre = function () {
        return this.nombre;
    };
    Persona.prototype.setnombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Persona.prototype.getapellido = function () {
        return this.apellido;
    };
    Persona.prototype.setapellido = function (nuevoApellido) {
        this.apellido = nuevoApellido;
    };
    return Persona;
}());
var Visitante = /** @class */ (function () {
    function Visitante(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Visitante.prototype.getnombre = function () {
        return this.nombre;
    };
    Visitante.prototype.setnombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Visitante.prototype.getapellido = function () {
        return this.apellido;
    };
    Visitante.prototype.setapellido = function (nuevoApellido) {
        this.apellido = nuevoApellido;
    };
    return Visitante;
}());
var Guardia = /** @class */ (function () {
    function Guardia(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Guardia.prototype.getnombre = function () {
        return this.nombre;
    };
    Guardia.prototype.setnombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Guardia.prototype.getapellido = function () {
        return this.apellido;
    };
    Guardia.prototype.setapellido = function (nuevoApellido) {
        this.apellido = nuevoApellido;
    };
    return Guardia;
}());
var MiPersona = new Persona("Sergio", "Barrionuevo");
var MiVisita = new Visitante("Juan", "Barrionuevo");
var MiGuardia = new Guardia("Mish", "Barrionuevo");
console.log("Persona: ".concat(MiPersona.getnombre(), " ").concat(MiPersona.getapellido()));
console.log("Vistante: ".concat(MiVisita.getnombre(), " ").concat(MiVisita.getapellido()));
console.log("Guardia: ".concat(MiGuardia.getnombre(), " ").concat(MiGuardia.getapellido()));
