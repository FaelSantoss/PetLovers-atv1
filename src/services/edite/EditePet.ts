import { Edite } from './Edite';
import { Entrada } from '../../cli/Entrada';
import Pet from '../../models/Pet';
import Cliente from '../../models/Cliente';

export class EditePet extends Edite {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public async editar(): Promise<void> {
        const nomeCliente = await this.entrada.receberTexto('Digite o nome do cliente dono do pet:');
        
        // Procurar o cliente pelo nome
        const cliente = this.clientes.find(c => c.nome === nomeCliente);

        if (!cliente) {
            console.log('Cliente não encontrado!');
            return;
        }

        const nomePetEditar = await this.entrada.receberTexto('Digite o nome do pet que deseja editar:');
        
        // Procurar o pet pelo nome dentro dos pets do cliente
        const pet = cliente.getPets.find(p => p.getNome === nomePetEditar);

        if (!pet) {
            console.log('Pet não encontrado!');
            return;
        } else {
            console.log(`Editando o pet: ${pet.getNome}`);
        }

        let opcao = '';
        while (opcao !== 'Concluir edição') {
            opcao = await this.entrada.receberSelect('Escolha uma opção para editar', ['Editar nome', 'Editar raça', 'Editar gênero', 'Editar tipo', 'Concluir edição']);

            switch (opcao) {
                case 'Editar nome':
                    const novoNome = await this.entrada.receberTexto('Digite o novo nome do pet:');
                    pet['nome'] = novoNome; // Atualiza diretamente a propriedade privada
                    console.log('Nome do pet atualizado com sucesso!');
                    break;

                case 'Editar raça':
                    const novaRaca = await this.entrada.receberTexto('Digite a nova raça do pet:');
                    pet['raca'] = novaRaca;
                    console.log('Raça do pet atualizada com sucesso!');
                    break;

                case 'Editar gênero':
                    const novoGenero = await this.entrada.receberTexto('Digite o novo gênero do pet:');
                    pet['genero'] = novoGenero;
                    console.log('Gênero do pet atualizado com sucesso!');
                    break;

                case 'Editar tipo':
                    const novoTipo = await this.entrada.receberTexto('Digite o novo tipo do pet:');
                    pet['tipo'] = novoTipo;
                    console.log('Tipo do pet atualizado com sucesso!');
                    break;

                case 'Concluir edição':
                    console.log('Edição do pet concluída.');
                    break;
            }
        }
    }
}
