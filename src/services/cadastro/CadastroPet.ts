import { Entrada } from "../../cli/Entrada";
import { Cadastro } from "./Cadastro";

import Cliente from "../../models/Cliente";
import Pet from "../../models/Pet";

export class CadastroPet extends Cadastro {
    private clientes: Cliente[]
    private entrada: Entrada

    constructor(clientes: Cliente[]) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada
    }

    public async cadastrar(): Promise<void> {
        const nomeDono = await this.entrada.receberTexto('Digite o nome do dono do pet: ')

        const donoPet = this.clientes.filter((cliente) => cliente.nome == nomeDono)

        if (donoPet) {            
            const nomePet = await this.entrada.receberTexto('Digite o nome do pet: ')
            const raca = await this.entrada.receberTexto('Digite a raça do pet: ')
            const genero = await this.entrada.receberTexto('Digite o genero do pet: ')
            const tipo = await this.entrada.receberTexto('Digite o tipo do pet: ')
            const novoPet = new Pet(nomePet,nomeDono, raca, genero, tipo)

        this.clientes.forEach((cliente) => {
            if (cliente.nome == nomeDono) {
                cliente.adicionarPet(novoPet)
            }
        })
    }
    }
}