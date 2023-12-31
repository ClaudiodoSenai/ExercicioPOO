class ContaBancaria {
    nome: string;
    saldo: number;
    

    constructor(nome: string, saldo: number) {
        this.nome = nome;
        this.saldo = saldo;
      
    }

    depositar(deposito:number) {
        this.saldo=this.saldo+deposito;
        return " E meu novo saldo é "  + "R$" +  this.saldo + " após o depósito"
    }

    consultar() {
      return "Meu nome é " +this.nome + " e eu tenho "  + "R$" +  this.saldo + " na minha conta"


    }
    
    sacar(saque:number){
        this.saldo=this.saldo-saque;
        return " Meu novo saldo é "  + "R$" + this.saldo + " após o saque"
    }

    novoSaque(saque:number){
        this.saldo=this.saldo-saque;
        return " Meu novo saldo é "  + "R$" + this.saldo + " após o saque"
    }
}

let minhaConta = new ContaBancaria("João", 1000);

console.log(minhaConta.consultar());
console.log(minhaConta.depositar(500));
console.log(minhaConta.consultar());
console.log(minhaConta.sacar(200));
console.log(minhaConta.consultar());
console.log(minhaConta.novoSaque(1500));
console.log(minhaConta.consultar());

let minhaConta2 = new ContaBancaria("Mariazinha244", 10000);
console.log(minhaConta2.consultar());
console.log(minhaConta2.depositar(500));
console.log(minhaConta2.consultar());
console.log(minhaConta2.sacar(200));
console.log(minhaConta2.consultar());
console.log(minhaConta2.novoSaque(1500));
console.log(minhaConta2.consultar());

let minhaConta3 = new ContaBancaria("Claudinhão", 9000);
console.log(minhaConta3.consultar());
console.log(minhaConta3.depositar(500));
console.log(minhaConta3.consultar());
console.log(minhaConta3.sacar(200));
console.log(minhaConta3.consultar());
console.log(minhaConta3.novoSaque(1500));
console.log(minhaConta3.consultar());