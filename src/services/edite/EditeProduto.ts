import { Edite } from './Edite';
import { Entrada } from '../../cli/Entrada';
import Produto from '../../models/Produto';

export class EditeProduto extends Edite {
    private produtos: Produto[];
    private entrada: Entrada;

    constructor(produtos: Produto[]) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public async editar(): Promise<void> {
        const nomeProdutoEditar = await this.entrada.receberTexto('Digite o nome do produto que deseja editar:');
        
        // Procurar o produto pelo nome
        const produto = this.produtos.find(p => p.nome=== nomeProdutoEditar);

        if (!produto) {
            console.log('Produto não encontrado!');
            return;
        } else {
            console.log(`Editando o produto: ${produto.nome}`);
        }

        let opcao = '';
        while (opcao !== 'Concluir edição') {
            opcao = await this.entrada.receberSelect('Escolha uma opção para editar', ['Editar nome', 'Editar preço', 'Concluir edição']);

            switch (opcao) {
                case 'Editar nome':
                    const novoNome = await this.entrada.receberTexto('Digite o novo nome do produto:');
                    produto['nome'] = novoNome;
                    console.log('Nome do produto atualizado com sucesso!');
                    break;

                case 'Editar preço':
                    const novoPreco = await this.entrada.receberNumero('Digite o novo preço do produto:');
                    produto['preco'] = novoPreco;
                    console.log('Preço do produto atualizado com sucesso!');
                    break;

                case 'Concluir edição':
                    console.log('Edição do produto concluída.');
                    break;
            }
        }
    }
}
