"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPreparo"] = "Aguardando preparo";
    StatusPedido["EmPreparo"] = "Em preparo";
    StatusPedido["SaiuParaEntrega"] = "Saiu para entrega";
    StatusPedido["Entregue"] = "Pedido entregue";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        return "Produto adissionado com çuseçu!!!!!!!";
    }
    visualizar() {
        for (let i = 0; i < this.produtos.length; i++) {
            console.log("O " + this.produtos[i].nome + " custa " + this.produtos[i].valor);
        }
    }
    exibirStatus() {
        console.log("O status do pedido é: " + this.status);
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirProdutosDoPedido() {
        console.log("Os produtos do pedido são");
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
