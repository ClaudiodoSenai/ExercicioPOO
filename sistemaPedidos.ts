enum StatusPedido {
    AguardandoPreparo = "Aguardando preparo",
    EmPreparo = "Em preparo",
    SaiuParaEntrega = "Saiu para entrega",
    Entregue = "Pedido entregue"
}

class ProdutoPedido {
    nome: string;
    valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }
}

class Pedido {
    private produtos: ProdutoPedido[] = []
    private status: StatusPedido;

    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;

    }

    adicionarProduto(produto: ProdutoPedido) {
        this.produtos.push(produto);
        return "Produto adissionado com çuseçu!!!!!!!"

    }

    visualizar() {
        for (let i = 0; i < this.produtos.length; i++) {
            console.log("O " + this.produtos[i].nome + " custa " + this.produtos[i].valor);
        }
    }
    exibirStatus() {
        console.log("O status do pedido é: " + this.status)
    }

    atualizarStatus(status: StatusPedido) {
        this.status = status
    }

    exibirProdutosDoPedido(){
        console.log("Os produtos do pedido são")
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i]);
        }
    }

}

const produto = new ProdutoPedido("Solular", 1890.89);
const pedido = new Pedido();

console.log(pedido.adicionarProduto(produto));
(pedido.visualizar());
(pedido.exibirStatus());
(pedido.atualizarStatus(StatusPedido.EmPreparo));
(pedido.exibirStatus());


const produto9 = new ProdutoPedido("Noltibuque", 1999.99);

console.log(pedido.adicionarProduto(produto9));
(pedido.visualizar());
(pedido.exibirStatus());
(pedido.atualizarStatus(StatusPedido.SaiuParaEntrega));
(pedido.exibirStatus());
(pedido.visualizar());

