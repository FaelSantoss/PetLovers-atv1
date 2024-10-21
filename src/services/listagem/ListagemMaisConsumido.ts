import Cliente from "../../models/Cliente";
import { Listagem } from "./Listagem";

export class ListagemMaisConsumidos extends Listagem{
    private clientes: Cliente[];

    constructor(clientes: Cliente[]) {
        super()
        this.clientes = clientes;
    }

    public listar(): void {
        const produtosMap = new Map<string, number>();
        const servicosMap = new Map<string, number>();

        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                pet.getProdutosConsumidos.forEach(produto => {
                    produtosMap.set(produto.nome, (produtosMap.get(produto.nome) || 0) + produto.quantidade);
                });
                pet.getServicosConsumidos.forEach(servico => {
                    servicosMap.set(servico.nome, (servicosMap.get(servico.nome) || 0) + servico.quantidade);
                });
            });
        });

        const tabelaMaisConsumidos = [
            ...Array.from(produtosMap.entries()).map(([nome, quantidade]) => ({
                "Tipo": "Produto",
                "Nome": nome,
                "Quantidade Consumida": quantidade
            })),
            ...Array.from(servicosMap.entries()).map(([nome, quantidade]) => ({
                "Tipo": "Serviço",
                "Nome": nome,
                "Quantidade Consumida": quantidade
            }))
        ];

        console.table(tabelaMaisConsumidos);
    }
}
