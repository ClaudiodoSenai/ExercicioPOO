class ProdutoLoja {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;

    }
}

class CarrinhoDeCompras {
    private produto: ProdutoLoja[] = [];

    constructor() {

    }
    adicionarProduto(produto: ProdutoLoja) {
        this.produto.push(produto);
    }

    remover(produto: ProdutoLoja) {
        this.produto = this.produto.filter(item => item.nome != produto.nome)
    }

    calcularTotal() {
        let soma = 0
        for (let i = 0; i < this.produto.length; i++) {
            soma = soma + this.produto[i].preco
        }
        console.log(soma)
    }
}

class Loja {
    estoque: ProdutoLoja[] = [];
    carrinho = new CarrinhoDeCompras();

    constructor() {

    }
    adicionarEstoque(estoque: ProdutoLoja) {
        this.estoque.push(estoque);
    }

    removerEstoque(carrinho: ProdutoLoja) {
        this.estoque= this.estoque.filter(item => item.nome != estoque.nome)
}
    adicionarCarrinho(carrinho: CarrinhoDeCompras) {
    this.carrinho.push(carrinho);
}

    removerCarrinho(estoque: ProdutoLoja) {
    this.estoque= this.estoque.filter(item => item.nome != estoque.nome)
}
}