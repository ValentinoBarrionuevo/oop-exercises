var Ninja = /** @class */ (function () {
    function Ninja(arteMarcial, arma, fuerza, salto) {
        this.arteMarcial = arteMarcial;
        this.arma = arma;
        this.fuerza = fuerza;
        this.salto = salto;
    }
    Ninja.prototype.getarteMarcial = function () {
        return this.arteMarcial;
    };
    Ninja.prototype.setarteMarcial = function (nuevoArteMarcial) {
        this.arteMarcial = nuevoArteMarcial;
    };
    Ninja.prototype.getarma = function () {
        return this.arma;
    };
    Ninja.prototype.setarma = function (nuevoArma) {
        this.arma = nuevoArma;
    };
    Ninja.prototype.getfuerza = function () {
        return this.fuerza;
    };
    Ninja.prototype.setfuerza = function (nuevoFuerza) {
        this.fuerza = nuevoFuerza;
    };
    Ninja.prototype.getsalto = function () {
        return this.salto;
    };
    Ninja.prototype.setsalto = function (nuevoSalto) {
        this.salto = nuevoSalto;
    };
    Ninja.prototype.saltar = function (multiplicador) {
        var resultadoSalto = this.salto * multiplicador;
        console.log("Salto x ".concat(resultadoSalto));
    };
    Ninja.prototype.ataque = function () {
        console.log("Usa arma: ".concat(this.arma, " y Arte Marcial: ").concat(this.arteMarcial));
    };
    return Ninja;
}());
var MiNinja = new Ninja("Judo", "Katana", 100, 20);
MiNinja.ataque();
MiNinja.saltar(2);
