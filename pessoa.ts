class Pessoa {
    nome: string;
    idade: number;
    comidas: string[];

    constructor(nome: string, idade: number, comidas: string[]) {
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }

    cumprimentar() {
        let msgHabilitação = " já posso tirar minha CNH";
        if (this.idade < 18) {
            msgHabilitação = " não posso tirar minha CNH";
        }
        return "Olá meu nome é " + this.nome + " e tenho " + this.idade + " anos" + msgHabilitação + "."
    }

    comidasFavoritas() {
        console.log("Minha(s) comida(s) favorita(s)")
        for (let i = 0; i < this.comidas.length; i++) {
            console.log(this.comidas[i]);
        }
    }
}

let pessoa1 = new Pessoa("Claudinhao", 24, ["doguinho", "pitsa", "macarrao", "strogonoff"]);

console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFavoritas());