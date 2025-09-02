"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
var Robot = /** @class */ (function () {
    function Robot(numeroSerie, ptb) {
        this.numeroSerie = numeroSerie;
        this.ptb = ptb;
    }
    Robot.prototype.setTraccion = function (t) {
        this.traccion = t;
    };
    Robot.prototype.mostrarInfo = function () {
        if (!this.traccion) {
            console.log("Robot ".concat(this.numeroSerie, " sin traccion asignada"));
            return;
        }
        var potenciaFinal = this.ptb - this.traccion.hpRestado;
        console.log("\n        Numero de serie: ".concat(this.numeroSerie, "\n        Potencia final: ").concat(potenciaFinal, " hp\n        Tipo de traccion: ").concat(this.traccion.tipo, "\n        Avance maximo: ").concat(this.traccion.distanciaMax, " km\n        Extra: ").concat(this.traccion.getInfo(), "\n        "));
    };
    return Robot;
}());
exports.Robot = Robot;
