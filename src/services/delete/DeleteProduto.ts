import { Delete } from './Delete';
import { Entrada } from '../../cli/Entrada';

import Produto from '../../models/Produto';

export class DeleteProduto extends Delete {
    private produtos: Produto[];
    private entrada: Entrada;

    constructor(produtos: Produto[]) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public async deletar() {
        const nome = await this.entrada.receberTexto('Digite o nome do produto que deseja deletar:');
        
        const index = this.produtos.findIndex(produto => produto.nome == nome);
        
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`Produto ${nome} deletado com sucesso!`);
        } else {
            console.log(`Produto com o nome ${nome} não foi encontrado.`);
        }
    }
}
