"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drone = void 0;
var Drone = /** @class */ (function () {
    function Drone(velocidadBase, alturaBase) {
        this.velocidadBase = velocidadBase;
        this.altura = alturaBase;
    }
    Drone.prototype.setHerramienta = function (h) {
        this.herramienta = h;
    };
    Drone.prototype.calcularVelocidad = function () {
        if (!this.herramienta) {
            return this.velocidadBase;
        }
        var exceso = this.herramienta.peso - 200;
        var bloques = 0;
        while (exceso >= 50) {
            bloques++;
            exceso = exceso - 50;
        }
        var penalizacion = this.velocidadBase * (bloques * 0.02);
        return this.velocidadBase - penalizacion;
    };
    Drone.prototype.calcularAltura = function () {
        if (!this.herramienta) {
            return this.velocidadBase;
        }
        var exceso = this.herramienta.peso - 200;
        var bloques = 0;
        while (exceso >= 50) {
            bloques++;
            exceso = exceso - 50;
        }
        var penalizacion = this.altura * (bloques * 0.05);
        return this.altura - penalizacion;
    };
    Drone.prototype.mostrarInfo = function () {
        if (!this.herramienta) {
            console.log("El dron no tiene herramienta asignada..");
        }
        else {
            console.log("Herramienta:", this.herramienta.tipo);
            console.log("Peso:", this.herramienta.peso, "gramos");
            console.log("Velocidad:", this.calcularVelocidad(), "mts/s");
            console.log("Altura:", this.calcularAltura(), "mts");
        }
    };
    return Drone;
}());
exports.Drone = Drone;
