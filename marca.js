var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    return Vehiculo;
}());
var MiAuto = new Vehiculo("Toyota", "Corolla", "JAD 077");
console.log("Marca: ".concat(MiAuto.marca));
console.log("Modelo: ".concat(MiAuto.modelo));
console.log("Patente: ".concat(MiAuto.patente));
console.log("Patente: ".concat(MiAuto.getPatente()));
