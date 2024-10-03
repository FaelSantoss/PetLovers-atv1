import { Delete } from './Delete';
import { Entrada } from '../../cli/Entrada';

import Cliente from '../../models/Cliente';

export class DeleteCliente extends Delete {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public async deletar(): Promise<void> {
        const nome = await this.entrada.receberTexto('Digite o nome do cliente que deseja deletar:');

        const clienteIndex = this.clientes.findIndex(cliente => cliente.nome === nome);

        if (clienteIndex !== -1) {
            const cliente = this.clientes[clienteIndex];

            // cliente.removerPet(cliente.getPets)

            this.clientes.splice(clienteIndex, 1);

            console.log(`Cliente ${nome} e seus pets foram deletados com sucesso!`);
        } else {
            console.log(`Cliente com o nome ${nome} não foi encontrado.`);
        }
    }
}
