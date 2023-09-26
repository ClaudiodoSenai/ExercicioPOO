"use strict";
class Funcionario1 {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    salarioMensal() {
        console.log("O salário do " + this.nome + " é de " + this.salario);
    }
}
class Gerente extends Funcionario1 {
    constructor() {
        super("Geraldo getulicio", 8000);
    }
    calcularSalarioMensal() {
        let aumento = (this.salario * 10) / 100;
        this.salario = this.salario + aumento;
        return this.salario;
    }
}
class Desenvolvedor extends Funcionario1 {
    constructor() {
        super("Geraldo Augusto", 1000);
    }
    calcularSalarioMensal() {
        console.log("O salário do " + this.nome + " é de " + this.salario);
        return this.salario;
    }
}
const funcionario1 = new Gerente;
funcionario1.salarioMensal();
funcionario1.calcularSalarioMensal();
funcionario1.salarioMensal();
const funcionario9 = new Desenvolvedor;
funcionario9.calcularSalarioMensal();
