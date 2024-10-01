import { Cadastro } from './Cadastro';
import { Entrada } from '../../cli/Entrada';

import Servico from '../../models/Servico';

export class CadastroServico extends Cadastro {
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(servicos: Servico[]) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public async cadastrar(): Promise<void> {
        const nome = await this.entrada.receberTexto('Digite o nome do serviço:');
        const preco = await this.entrada.receberTexto('Digite o preço do serviço:');

        const novoServico = new Servico(nome, parseFloat(preco));
        
        this.servicos.push(novoServico);

        console.log('Serviço cadastrado com sucesso!');
    }
}
