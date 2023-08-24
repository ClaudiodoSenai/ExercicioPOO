"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    descrever() {
        return "O produto " + this.nome + " custa R$" + this.preco;
    }
    desconto(porcentagem) {
        return "O produto " + this.nome + " custa R$" + (this.preco - ((this.preco * porcentagem) / 100)) + " com desconto";
    }
}
let produto1 = new Produto("Celular", 1000);
let produto2 = new Produto("Computador", 2000);
let produto3 = new Produto("Playstation", 5000);
console.log(produto1.descrever());
console.log(produto1.desconto(20));
console.log(produto2.descrever());
console.log(produto2.desconto(10));
console.log(produto3.descrever());
console.log(produto3.desconto(50));
