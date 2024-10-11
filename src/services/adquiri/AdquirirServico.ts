import Cliente from '../../models/Cliente';
import { Adquiri } from './Adquiri';
import { Entrada } from '../../cli/Entrada';
import Servico from '../../models/Servico';
import Compra from '../../models/Compra';

export class AdquiriServico extends Adquiri {
    private clientes: Cliente[];
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(clientes: Cliente[], servicos: Servico[]) {
        super();
        this.clientes = clientes;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public async adquirir(): Promise<void> {
        const nomeCliente = await this.entrada.receberTexto('Digite o nome do cliente:');
        const nomePet = await this.entrada.receberTexto('Digite o nome do pet ao qual vai ser destinado o serviço:');
        const nomeServico = await this.entrada.receberTexto('Digite o nome do serviço:');

        const cliente = this.clientes.find(c => c.nome === nomeCliente);
        if (!cliente) {
            console.log('Cliente não encontrado!');
            return;
        }

        const pet = cliente.getPets.find(p => p.getNome === nomePet);
        if (!pet) {
            console.log('Pet não encontrado!');
            return;
        }

        const servico = this.servicos.find(s => s.nome === nomeServico);
        if (!servico) {
            console.log('Serviço não encontrado!');
            return;
        }  

        const compra = new Compra(servico.nome, servico.preco, 1);

        pet.adicionarServicoConsumido(compra);
        cliente.adicionarServicoConsumido(compra);
        
        console.log('Serviço adquirido com sucesso!');
    }
}
