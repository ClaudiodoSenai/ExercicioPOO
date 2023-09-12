class Evento {
    nome: string;
    data: string;
    horario: string;

    constructor(nome: string, data: string, horario: string) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}

class Agenda {

    private evento: Evento[] = [];


    constructor() {

    }

    adicionarEvento(evento: Evento) {
        this.evento.push(evento);
    }

    visualizarAgenda() {
        console.log("Eventos Disponíveis")
        for (let i = 0; i < this.evento.length; i++) {
            console.log(this.evento[i].nome + " no dia" + this.evento[i].data + " às " + this.evento[i].horario);
        }
    }

    remover(evento: Evento) {
        this.evento = this.evento.filter(item => item.nome !== evento.nome)
    }

}
const evento1 = new Evento("Ralowin do Vini", "22/10/2023", "00H00");
const evento2 = new Evento("Revoada do Enzin", "06/09/2023", "03H00");
const evento3 = new Evento("Farofada do Melo", "07/09/2023", "22H00");

const agenda1 = new Agenda();
(agenda1.adicionarEvento(evento1));
(agenda1.adicionarEvento(evento2));
(agenda1.adicionarEvento(evento3));
console.log(agenda1.visualizarAgenda());
(agenda1.remover(evento2));
console.log(agenda1.visualizarAgenda());

