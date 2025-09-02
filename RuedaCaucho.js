"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuedaCaucho = void 0;
var RuedaCaucho = /** @class */ (function () {
    function RuedaCaucho() {
        this.tipo = "Rueda de Caucho";
        this.hpRestado = 1;
        this.distanciaMax = 100;
    }
    RuedaCaucho.prototype.getInfo = function () {
        return "".concat(this.tipo, ", resta ").concat(this.hpRestado, "hp, puede avanzar ").concat(this.distanciaMax, " km");
    };
    return RuedaCaucho;
}());
exports.RuedaCaucho = RuedaCaucho;
