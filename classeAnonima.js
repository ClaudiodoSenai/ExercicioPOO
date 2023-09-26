"use strict";
const pessoa = new class {
    constructor() {
        this.primeiroNome = "José";
        this.ultimoNome = "da Silva";
    }
    getNomeCompleto() {
        return this.primeiroNome + " " + this.ultimoNome;
    }
};
console.log(pessoa.getNomeCompleto());
const pessoa10 = {
    primeiroNome1: "José",
    ultimoNome1: "da Silva",
    getNomeCompleto1() {
        return this.primeiroNome1 + " " + this.ultimoNome1;
    }
};
const treinadorPessoal = new class {
    constructor() {
        this.rotina = [];
    }
    adicionarExercicios(nome, duracao) {
        this.rotina.push({ nome, duracao });
    }
    calcularTempoTotal() {
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        return soma;
    }
};
treinadorPessoal.adicionarExercicios("Corrida", 30);
treinadorPessoal.adicionarExercicios("Flexões", 15);
treinadorPessoal.adicionarExercicios("Agachamentos", 20);
console.log("Tempo total necessáro para a rotina " + treinadorPessoal.calcularTempoTotal() + " em minutos");
