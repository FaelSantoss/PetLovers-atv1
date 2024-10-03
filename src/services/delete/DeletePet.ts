import { Delete } from './Delete';
import { Entrada } from '../../cli/Entrada';

import Cliente from '../../models/Cliente';

export class DeletePet extends Delete {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public async deletar(): Promise<void> {
        const nome = await this.entrada.receberTexto('Digite o nome do pet que deseja deletar:');
        const nomeDono = await this.entrada.receberTexto('Digite o nome do dono do pet que deseja deletar:');
        const clienteIndex = this.clientes.findIndex(cliente => cliente.nome === nomeDono);

        if (clienteIndex !== -1) {
            const cliente = this.clientes[clienteIndex];
            const pet = cliente.getPets.filter(pet => pet.getNome == nome)
            if (pet) {
                cliente.removerPet(pet[0])
            } else {
                console.log(`Pet com o nome ${nome} não encontrado`)
            }
            console.log(`Pet ${nome} deletado com sucesso!`);
        } else {
            console.log(`Cliente com o nome ${nomeDono} não foi encontrado.`);
        }
    }
}