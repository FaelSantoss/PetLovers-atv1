import { Listagem } from './Listagem';
import Servico from '../../models/Servico';

export class ListagemServicos extends Listagem {
    private servicos: Servico[];

    constructor(servicos: Servico[]) {
        super();
        this.servicos = servicos;
    }

    public listar(): void {
        const tabelaServicos = this.servicos.map(servico => ({
            "Serviço": servico.nome,
            "Preço": servico.preco
        }));

        console.table(tabelaServicos);
    }
}
