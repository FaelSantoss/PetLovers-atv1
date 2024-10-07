import { Edite } from './Edite';
import { Entrada } from '../../cli/Entrada';
import Servico from '../../models/Servico';

export class EditeServico extends Edite {
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(servicos: Servico[]) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public async editar(): Promise<void> {
        const nomeServicoEditar = await this.entrada.receberTexto('Digite o nome do serviço que deseja editar:');
        
        // Procurar o serviço pelo nome
        const servico = this.servicos.find(s => s.nome === nomeServicoEditar);

        if (!servico) {
            console.log('Serviço não encontrado!');
            return;
        } else {
            console.log(`Editando o serviço: ${servico.nome}`);
        }

        let opcao = '';
        while (opcao !== 'Concluir edição') {
            opcao = await this.entrada.receberSelect('Escolha uma opção para editar', ['Editar nome', 'Editar preço', 'Concluir edição']);

            switch (opcao) {
                case 'Editar nome':
                    const novoNome = await this.entrada.receberTexto('Digite o novo nome do serviço:');
                    servico['nome'] = novoNome;
                    console.log('Nome do serviço atualizado com sucesso!');
                    break;

                case 'Editar preço':
                    const novoPreco = await this.entrada.receberNumero('Digite o novo preço do serviço:');
                    servico['preco'] = novoPreco;
                    console.log('Preço do serviço atualizado com sucesso!');
                    break;

                case 'Concluir edição':
                    console.log('Edição do serviço concluída.');
                    break;
            }
        }
    }
}
