"use strict";
class Tamandua {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return "Oi, eu sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos";
    }
    apresentarPara(humano) {
        return "Olá " + humano + " eu sou " + this.nome + " um " + this.raca + " de " + this.idade + " anos";
    }
}
let gilberto = new Tamandua("Gilberto", "Tamandua Bandeira", 4);
let sabrina = new Tamandua("Sabrina", "tamanduaí", 9);
console.log(gilberto.nome);
console.log(sabrina.nome);
console.log(gilberto.apresentar());
console.log(sabrina.apresentar());
console.log(gilberto.apresentarPara("Claudinhao"));
console.log(sabrina.apresentarPara("Enzin"));
