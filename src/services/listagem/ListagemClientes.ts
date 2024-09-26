import { Listagem } from './Listagem';
import Cliente from '../../models/Cliente';

export class ListagemClientes extends Listagem {
    private clientes: Cliente[];

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        const tabelaClientes = this.clientes.map(cliente => ({
            "Nome": cliente.nome,
            "Nome Social": cliente.nomeSocial,
            "CPF": cliente.getCpf.getValor,
            "Pets": cliente.getPets.map(pet => pet.getNome).join(", "),
            "Produtos Consumidos": cliente.getProdutosConsumidos.map(prod => prod.nome).join(", "),
            "Serviços Consumidos": cliente.getServicosConsumidos.map(serv => serv.nome).join(", "),
            "Telefones": cliente.getTelefones.map(tel => `(${tel.getDdd}) ${tel.getNumero}`).join(", ")
        }));

        console.table(tabelaClientes);
    }
}
