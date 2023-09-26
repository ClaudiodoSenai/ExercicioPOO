"use strict";
class Conta {
    constructor(numeroConta, saldo, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.titular = titular;
    }
}
class ContaCorrente extends Conta {
    constructor(limiteChequeEspecial) {
        super("19998", 1000, "Claudinhao");
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
        if (this.saldo + this.limiteChequeEspecial >= valor) {
            console.log("O novo valor após o saque é de " + this.saldo);
        }
        else {
            console.log("Saldo insuficiente para saque");
        }
    }
    depositar(valor) {
        //Se Limite for = a 0, exibir o deposito + saldo, 
        //porém se limite for diferente de 0, exibir valor do saldo + limite cheque 
        if (this.limiteChequeEspecial != 0) {
            console.log(" O saldo após o depósito é de " + ((this.saldo + this.limiteChequeEspecial) + valor));
        }
        else {
            console.log(" O saldo após o depósito é de " + (this.saldo + this.limiteChequeEspecial) + valor);
        }
    }
    consultarSaldo() {
        console.log("O saldo atual é de " + (this.saldo + this.limiteChequeEspecial));
        return this.saldo + this.limiteChequeEspecial;
    }
}
const conta1 = new ContaCorrente(100);
conta1.consultarSaldo();
conta1.depositar(100);
conta1.consultarSaldo();
