"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Visitante = /** @class */ (function (_super) {
    __extends(Visitante, _super);
    function Visitante(nombre, apellido, dni) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this.dni = dni;
        return _this;
    }
    Visitante.prototype.getDni = function () {
        return this.dni;
    };
    Visitante.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    return Visitante;
}(Persona_1.Persona));
exports.default = Visitante;
