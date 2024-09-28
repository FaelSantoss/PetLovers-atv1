import Cliente from '../../models/Cliente';
import { Cadastro } from './Cadastro';
import { Entrada } from '../../cli/Entrada';
import CPF from '../../models/Cpf'

export class CadastroCliente extends Cadastro {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public async cadastrar(): Promise<void> {
        const nome = await this.entrada.receberTexto('Digite o nome do cliente:');
        const nomeSocial = await this.entrada.receberTexto('Digite o nome social do cliente:');
        const cpfValor = await this.entrada.receberTexto('Digite o CPF do cliente:');
        const dataEmissaoCpf = new Date();

        const cpf = new CPF(cpfValor, dataEmissaoCpf);
        const novoCliente = new Cliente(nome, nomeSocial, cpf);
        
        this.clientes.push(novoCliente);

        console.log('Cliente cadastrado com sucesso!');
    }
}
