import Cliente from '../../models/Cliente';
import { Listagem } from './Listagem';

export class ListagemRegistroConsumo  extends Listagem {
    private clientes: Cliente[];

    constructor(clientes: Cliente[]) {
        super()
        this.clientes = clientes;
    }

    public listar(): void {
        const tabelaConsumo = this.clientes.flatMap(cliente =>
            cliente.getPets.flatMap(pet => ({
                "Cliente": cliente.nome,
                "Pet": pet.getNome,
                "Produtos Consumidos": pet.getProdutosConsumidos.map(produto => `${produto.nome}`).join(", "),
                "Serviços Consumidos": pet.getServicosConsumidos.map(servico => `${servico.nome}`).join(", ")
            }))
        );

        console.table(tabelaConsumo);
    }
}
