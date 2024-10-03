import { Delete } from './Delete';
import { Entrada } from '../../cli/Entrada';

import Servico from '../../models/Servico';

export class DeleteServico extends Delete {
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(servicos: Servico[]) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public async deletar() {
        const nome = await this.entrada.receberTexto('Digite o nome do serviço que deseja deletar:');
        
        const index = this.servicos.findIndex(produto => produto.nome == nome);
        
        if (index !== -1) {
            this.servicos.splice(index, 1);
            console.log(`Serviço ${nome} deletado com sucesso!`);
        } else {
            console.log(`Serviço com o nome ${nome} não foi encontrado.`);
        }
    }
}
