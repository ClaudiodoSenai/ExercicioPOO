"use strict";
class Estudante {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    media() {
        let soma = 0;
        let media = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
            media = soma / this.notas.length;
        }
        let msgaprovação = this.nome + ", sua média é " + soma / this.notas.length + " e você precisa estudar mais para melhorar seu desempenho.";
        if (media > 7) {
            msgaprovação = "Parabéns, " + this.nome + "! Sua média é " + soma / this.notas.length + " e você está aprovado(a).";
        }
        return msgaprovação;
    }
}
let estudante = new Estudante("Maria", 20, [8, 7.5, 9.2, 6.8, 9.5]);
console.log(estudante.media());
