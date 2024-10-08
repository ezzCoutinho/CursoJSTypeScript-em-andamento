// Agregação -> uma class é dependente de outra class para funcionar
// ligação media.
export class CarrinhoDeCompras {
  constructor(private readonly produtos: Produto[] = []) {}

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce(
      (soma, produto) => soma + produto.preco,
      0,
    );
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 1.9);
const produto3 = new Produto('Caneta', 0.9);

const carrinho = new CarrinhoDeCompras();
carrinho.inserirProduto(produto1, produto2, produto3);
console.log(carrinho.valorTotal());
console.log(carrinho.quantidadeProdutos());
