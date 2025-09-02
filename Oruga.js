"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oruga = void 0;
var Oruga = /** @class */ (function () {
    function Oruga() {
        this.tipo = "Oruga";
        this.hpRestado = 3;
        this.distanciaMax = 400;
    }
    Oruga.prototype.getInfo = function () {
        return "".concat(this.tipo, ", resta ").concat(this.hpRestado, "hp, puede avanzar ").concat(this.distanciaMax, "km");
    };
    return Oruga;
}());
exports.Oruga = Oruga;
