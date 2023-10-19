class ProdutoLoja{
    nome:string;
    preco:number;
    constructor(nome:string,preco:number){
        this.nome = nome;
        this.preco = preco;
    }
}

class CarrinhoDeCompras{
    produtosDoCarrinho:ProdutoLoja[]=[]

    constructor(){
        
    }

    exibirProdutos(){
        console.log("Produtos do carrinho")
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            console.log("Produto " + this.produtosDoCarrinho[i].nome + "R$ "
             + this.produtosDoCarrinho[i].preco.toFixed(2) );
            
        }
    }

    adicionarProduto(produto:ProdutoLoja){
        this.produtosDoCarrinho.push(produto)
    }

    excluirProduto(produto:ProdutoLoja){
        this.produtosDoCarrinho=this.produtosDoCarrinho.filter((item) => item.nome !== produto.nome)
    }

    calcularValorTotal(){
        let soma = 0
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
       soma = soma + this.produtosDoCarrinho[i].preco
            
        }
        return soma.toFixed(2);
    }
}

class Loja{
    produtosDoEstoque:ProdutoLoja []=[]
    carrinhoDecompra = new CarrinhoDeCompras();

    constructor(){

    }

    adicionarProdutoEstoque(produto:ProdutoLoja){
        this.produtosDoEstoque.push(produto);
    }

    removerProdutoEstoque(produto:ProdutoLoja){
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome)
    }

    adicionarProdutoAoCarrinho(produto:ProdutoLoja){
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome === produto.nome)
        if (produtoEncontrado){
            this.carrinhoDecompra.adicionarProduto(produtoEncontrado);
        return console.log("Prodout adisionaod com sucessso");
        }
        else{
            return console.log("Produto não encontrado on estoque da lola")
        }
    }

    removerProdutosDoCarrinho(produto:ProdutoLoja){
        this.carrinhoDecompra.excluirProduto(produto)
    }

    exibirProdutosDoCarrinho(){
        this.carrinhoDecompra.exibirProdutos();
    }

}

const produtoLoja1 = new ProdutoLoja("Camisseta",99.29);
const produtoLoja2 = new ProdutoLoja("sohrts",100.09);
const produtoLoja3 = new ProdutoLoja("Sapota",89.92);
const produtoLoja4 = new ProdutoLoja("miea",10.19);

const minhaLoja = new Loja();
//adicionando ao estoque
minhaLoja.adicionarProdutoEstoque(produtoLoja1);
minhaLoja.adicionarProdutoEstoque(produtoLoja2);
minhaLoja.adicionarProdutoEstoque(produtoLoja3);
minhaLoja.adicionarProdutoEstoque(produtoLoja4);

//adicionando ao carrinho
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja4);

//remover do carrinho 
minhaLoja.removerProdutosDoCarrinho(produtoLoja4);

//remover do estoque
minhaLoja.removerProdutoEstoque(produtoLoja4);

//exibir produtos do carrinho

minhaLoja.exibirProdutosDoCarrinho()

//exibir valor total
console.log("O total do carrinho de compras:R$ " + minhaLoja.carrinhoDecompra.calcularValorTotal());