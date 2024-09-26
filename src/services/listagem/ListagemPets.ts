import { Listagem } from './Listagem';
import Pet from '../../models/Pet';
import Cliente from '../../models/Cliente';

export class ListagemPets extends Listagem {
    private pets: Pet[];

    constructor(clientes: Cliente[]) {
        super();
        this.pets = clientes.flatMap((cliente) => cliente.getPets);
    }

    public listar(): void {
        const tabelaPets = this.pets.map(pet => ({
            "Nome": pet.getNome,
            "Nome do Dono": pet.getNomeDono,
            "Raça": pet.getRaca,
            "Gênero": pet.getGenero,
            "Tipo": pet.getTipo
        }));

        console.table(tabelaPets);
    }
}
