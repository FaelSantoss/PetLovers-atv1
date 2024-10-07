import { Edite } from './Edite';
import { Entrada } from '../../cli/Entrada';
import Cliente from '../../models/Cliente';
import CPF from '../../models/Cpf';

export class EditeCliente extends Edite {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public async editar(): Promise<void> {
        const nomeClienteEditar = await this.entrada.receberTexto('Digite o nome do cliente que deseja editar:');
        
        const cliente = this.clientes.find(c => c.nome === nomeClienteEditar);

        if (!cliente) {
            console.log('Cliente não encontrado!');
            return
        } else {
            console.log(`Editando o cliente: ${cliente.nome}`);
        }

        let opcao = ''
        while (opcao !== 'Concluir edição') {
            opcao = await this.entrada.receberSelect('Escolha uma opção para editar', ['Editar nome', 'Editar nome social', 'Editar CPF', 'Concluir edição'])

            switch (opcao) {
                case 'Editar nome':
                    const novoNome = await this.entrada.receberTexto('Digite o novo nome do cliente:');
                    cliente.nome = novoNome;
                    console.log('Nome atualizado com sucesso!');
                    break;

                case 'Editar nome social':
                    const novoNomeSocial = await this.entrada.receberTexto('Digite o novo nome social do cliente:');
                    cliente.nomeSocial = novoNomeSocial;
                    console.log('Nome social atualizado com sucesso!');
                    break;

                case 'Editar CPF':
                    const novoCpfValor = await this.entrada.receberTexto('Digite o novo CPF do cliente:');
                    const dataEmissaoCpf = new Date();
                    const cpf = new CPF(novoCpfValor, dataEmissaoCpf);
                    cliente.cpf = cpf;
                    console.log('CPF atualizado com sucesso!');
                    break;

                case 'Concluir edição':
                    console.log('Edição concluída.');
                    break
            }
        }
    }
}
