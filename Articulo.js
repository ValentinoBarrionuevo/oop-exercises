var Articulo = /** @class */ (function () {
    function Articulo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Articulo.prototype.getMarca = function () {
        return this.marca;
    };
    Articulo.prototype.getModelo = function () {
        return this.modelo;
    };
    return Articulo;
}());
var MarcaYModelo = new Articulo("Volkswagen", "Suran");
console.log("Marca: ".concat(MarcaYModelo.getMarca()));
console.log("Modelo: ".concat(MarcaYModelo.getModelo()));
