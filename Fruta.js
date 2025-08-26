var Fruta = /** @class */ (function () {
    function Fruta(Color, Peso, esEstacional) {
        if (Color !== undefined && Peso !== undefined && esEstacional !== undefined) {
            this.Color = Color;
            this.Peso = Peso;
            this.esEstacional = esEstacional;
        }
        else {
            this.Color = "Desconocido";
            this.Peso = 0;
            this.esEstacional = false;
        }
    }
    Fruta.prototype.getColor = function () {
        return this.Color;
    };
    Fruta.prototype.setColor = function (newColor) {
        this.Color = newColor;
    };
    Fruta.prototype.getPeso = function () {
        return this.Peso;
    };
    Fruta.prototype.setPeso = function (Peso) {
        this.Peso = Peso;
    };
    Fruta.prototype.getesEstacional = function () {
        return this.esEstacional;
    };
    Fruta.prototype.setesEstacional = function (esEstacional) {
        this.esEstacional = esEstacional;
    };
    Fruta.prototype.esComestible = function () {
        if (this.getPeso() < 200 && this.getesEstacional()) { // use if para probar como seria ¯\_(ツ)_/¯
            return true;
        }
        else {
            return false;
        }
    };
    return Fruta;
}());
var MiFruta = new Fruta("Manzana", 180, true);
console.log("La fruta es comestible? ".concat(MiFruta.esComestible()));
var otraFruta = new Fruta("Sandia", 5000, true);
console.log("La sandia es comestible? ".concat(otraFruta.esComestible()));
