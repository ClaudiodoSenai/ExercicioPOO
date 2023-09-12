"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produto = [];
    }
    adicionarProduto(produto) {
        this.produto.push(produto);
    }
    remover(produto) {
        this.produto = this.produto.filter(item => item.nome != produto.nome);
    }
    calcularTotal() {
        let soma = 0;
        for (let i = 0; i < this.produto.length; i++) {
            soma = soma + this.produto[i].preco;
        }
        console.log(soma);
    }
}
class Loja {
    constructor() {
        this.estoque = [];
        this.carrinho = new CarrinhoDeCompras();
    }
    adicionarEstoque(estoque) {
        this.estoque.push(estoque);
    }
    removerEstoque(carrinho) {
        this.estoque = this.estoque.filter(item => item.nome != estoque.nome);
    }
    adicionarCarrinho(carrinho) {
        this.carrinho.push(carrinho);
    }
    removerCarrinho(estoque) {
        this.estoque = this.estoque.filter(item => item.nome != estoque.nome);
    }
}
