import { Cadastro } from './Cadastro';
import { Entrada } from '../../cli/Entrada';

import Produto from '../../models/Produto';

export class CadastroProduto extends Cadastro {
    private produtos: Produto[];
    private entrada: Entrada;

    constructor(produtos: Produto[]) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public async cadastrar(): Promise<void> {
        const nome = await this.entrada.receberTexto('Digite o nome do produto:');
        const preco = await this.entrada.receberTexto('Digite o preço do produto:');
        const novoProduto = new Produto(nome, parseFloat(preco));
        
        this.produtos.push(novoProduto);

        console.log('Produto cadastrado com sucesso!');
    }
}
