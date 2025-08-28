"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (nuevoApellido) {
        this.apellido = nuevoApellido;
    };
    Persona.prototype.presentarse = function () {
        return ("".concat(this.getNombre(), ", ").concat(this.getApellido()));
    };
    return Persona;
}());
exports.Persona = Persona;
