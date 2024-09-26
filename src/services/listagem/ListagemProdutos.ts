import { Listagem } from './Listagem';
import Produto from '../../models/Produto';

export class ListagemProdutos extends Listagem {
    private produtos: Produto[];

    constructor(produtos: Produto[]) {
        super();
        this.produtos = produtos;
    }

    public listar(): void {
        const tabelaProdutos = this.produtos.map(produto => ({
            "Produto": produto.nome,
            "Preço": produto.preco
        }));

        console.table(tabelaProdutos);
    }
}
