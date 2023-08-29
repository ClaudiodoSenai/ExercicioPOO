"use strict";
class Funcionario {
    constructor(nome, cargo, salario) {
        this.inss = 11;
        this.ir = 7.5;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    totalImpostos() {
        let desconto = ((this.salario * this.inss) / 100);
        let salarioAtualizado = this.salario - desconto;
        return "Valor de impostos a serem pagos: " + (desconto + (salarioAtualizado * this.ir) / 100);
    }
    aplicarAumento(percentual) {
        let aumento = (this.salario * percentual) / 100;
        this.salario = this.salario + aumento;
        return "Aumento de " + percentual + "%." + "Novo salário: " + this.salario;
    }
    exibirDetalheFuncionario() {
        let desconto = ((this.salario * this.inss) / 100);
        let salarioAtualizado = this.salario - desconto;
        let impostos = (desconto + (salarioAtualizado * this.ir) / 100);
        let salarioLiquido = this.salario - impostos;
        return "Funcionário: " + this.nome + ", Salário Bruto:" + this.salario +
            ", Impostos a serem pagos: " + impostos + " Salario liquído: " + salarioLiquido;
    }
}
let funcionario = new Funcionario("Ana Silva", "Analista de Vendas", 3000);
console.log(funcionario.totalImpostos());
console.log(funcionario.exibirDetalheFuncionario());
console.log(funcionario.aplicarAumento(10));
console.log(funcionario.exibirDetalheFuncionario());
let funcionario2 = new Funcionario("Claudio", "Professor", 20000);
console.log(funcionario2.totalImpostos());
console.log(funcionario2.exibirDetalheFuncionario());
console.log(funcionario2.aplicarAumento(50));
console.log(funcionario2.exibirDetalheFuncionario());
