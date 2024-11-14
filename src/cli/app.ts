import Empresa from '../models/Empresa';
import { Entrada } from './Entrada';
import { clientes, produtos, servicos } from "../mock/dadosMockados";

import { ListagemClientes, ListagemPets, ListagemProdutos, ListagemRegistroConsumo, ListagemServicos } from '../services/listagem';
import { CadastroCliente, CadastroPet, CadastroProduto, CadastroServico } from '../services/cadastro';
import { DeleteCliente, DeletePet, DeleteProduto, DeleteServico } from '../services/delete';
import { EditeCliente, EditePet, EditeProduto, EditeServico } from '../services/edite';
import { AdquiriProduto, AdquiriServico } from '../services/adquiri'
import { ListagemMaisConsumidos } from '../services/listagem/ListagemMaisConsumido';

export class App {
    private entrada: Entrada;
    private empresa: Empresa;

    private cadastroCliente: CadastroCliente;
    private cadastroPet: CadastroPet;
    private cadastroProduto: CadastroProduto;
    private cadastroServico: CadastroServico;

    private deleteCliente: DeleteCliente;
    private deletePet: DeletePet;
    private deleteProduto: DeleteProduto;
    private deleteServico: DeleteServico;

    private editeCliente: EditeCliente;
    private editePet: EditePet;
    private editeProduto: EditeProduto;
    private editeServico: EditeServico;

    private listagemClientes: ListagemClientes;
    private listagemPets: ListagemPets;
    private listagemProdutos: ListagemProdutos;
    private listagemServicos: ListagemServicos;
    private listagemRegistroConsumo: ListagemRegistroConsumo;
    private listagemMaisConsumidos: ListagemMaisConsumidos;

    private adquiriProduto: AdquiriProduto;
    private adquiriServico: AdquiriServico

    constructor() {
        this.entrada = new Entrada();
        this.empresa = new Empresa(clientes, produtos, servicos);

        this.cadastroCliente = new CadastroCliente(this.empresa.getClientes);
        this.cadastroPet = new CadastroPet(this.empresa.getClientes);
        this.cadastroProduto = new CadastroProduto(this.empresa.getProdutos);
        this.cadastroServico = new CadastroServico(this.empresa.getServicos);

        this.deleteCliente = new DeleteCliente(this.empresa.getClientes);
        this.deletePet = new DeletePet(this.empresa.getClientes);
        this.deleteProduto = new DeleteProduto(this.empresa.getProdutos);
        this.deleteServico = new DeleteServico(this.empresa.getServicos);

        this.editeCliente = new EditeCliente(this.empresa.getClientes);
        this.editePet = new EditePet(this.empresa.getClientes);
        this.editeProduto = new EditeProduto(this.empresa.getProdutos);
        this.editeServico = new EditeServico(this.empresa.getServicos);

        this.listagemClientes = new ListagemClientes(this.empresa.getClientes);
        this.listagemPets = new ListagemPets(this.empresa.getClientes);
        this.listagemProdutos = new ListagemProdutos(this.empresa.getProdutos);
        this.listagemServicos = new ListagemServicos(this.empresa.getServicos);
        this.listagemRegistroConsumo = new ListagemRegistroConsumo(this.empresa.getClientes);
        this.listagemMaisConsumidos = new ListagemMaisConsumidos(this.empresa.getClientes);

        this.adquiriProduto = new AdquiriProduto(this.empresa.getClientes, this.empresa.getProdutos)
        this.adquiriServico = new AdquiriServico(this.empresa.getClientes, this.empresa.getServicos)
    }

    public async start() {
        while (true) {
            const response = await this.entrada.receberSelect('Menu', ['Clientes', 'Pets', 'Produtos', 'Servicos', 'Listagem Consumo', 'Sair']);

            switch (response) {
                case 'Clientes':
                    await this.handleClientesOption();
                    break;
                case 'Pets':
                    await this.handlePetsOption();
                    break;
                case 'Produtos':
                    await this.handleProdutosOption();
                    break;
                case 'Servicos':
                    await this.handleServicoOption();
                    break;
                case 'Listagem Consumo':
                    await this.handleListagemConsumoOption();
                    break
                case 'Sair':
                    console.log('Saindo...');
                    console.clear();
                    process.exit();
            }
        }
    }

    private async handleClientesOption() {
        const response = await this.entrada.receberSelect('Escolha uma opção:',
            ['Cadastrar Cliente', 'Editar Clientes', 'Deletar Clientes', 'Listar Clientes', 'Voltar']
        );
        switch (response) {
            case 'Cadastrar Cliente':
                await this.cadastroCliente.cadastrar();
                break;
            case 'Editar Clientes':
                await this.editeCliente.editar();
                break;
            case 'Deletar Clientes':
                await this.deleteCliente.deletar();
                break;
            case 'Listar Clientes':
                this.listagemClientes.listar();
                break;
            case 'Voltar':
                console.clear();
                break;
        }
    }

    private async handlePetsOption() {
        const response = await this.entrada.receberSelect('Escolha uma opção:',
            ['Cadastrar Pets', 'Editar Pets', 'Deletar Pets', 'Listar Pets', 'Voltar']
        );
        switch (response) {
            case 'Cadastrar Pets':
                await this.cadastroPet.cadastrar();
                break;
            case 'Editar Pets':
                await this.editePet.editar();
                break;
            case 'Deletar Pets':
                await this.deletePet.deletar();
                break;
            case 'Listar Pets':
                this.listagemPets.listar();
                break;
            case 'Voltar':
                console.clear();
                break;
        }
    }

    private async handleProdutosOption() {
        const response = await this.entrada.receberSelect('Escolha uma opção:',
            ['Cadastrar Produtos', 'Editar Produtos', 'Deletar Produtos', 'Adquirir Produtos', 'Listar Produtos', 'Voltar']
        );
        switch (response) {
            case 'Cadastrar Produtos':
                await this.cadastroProduto.cadastrar();
                break;
            case 'Editar Produtos':
                await this.editeProduto.editar();
                break;
            case 'Deletar Produtos':
                await this.deleteProduto.deletar();
                break;
            case 'Adquirir Produtos':
                await this.adquiriProduto.adquirir();
                break;
            case 'Listar Produtos':
                this.listagemProdutos.listar();
                break;
            case 'Voltar':
                console.clear();
                break;
        }
    }

    private async handleServicoOption() {
        const response = await this.entrada.receberSelect('Escolha uma opção:',
            ['Cadastrar Serviços', 'Editar Serviços', 'Deletar Serviços', 'Adquirir Serviços', 'Listar Serviços', 'Voltar']
        );
        switch (response) {
            case 'Cadastrar Serviços':
                await this.cadastroServico.cadastrar();
                break;
            case 'Editar Serviços':
                await this.editeServico.editar();
                break;
            case 'Deletar Serviços':
                await this.deleteServico.deletar();
                break;
            case 'Adquirir Serviços':
                await this.adquiriServico.adquirir();
                break;
            case 'Listar Serviços':
                this.listagemServicos.listar();
                break;
            case 'Voltar':
                console.clear();
                break;
        }
    }

    private async handleListagemConsumoOption() {
        const response = await this.entrada.receberSelect('Escolha uma opção:',
            ['Registro de Consumo', 'Mais Consumidos', 'Voltar']
        );
        switch (response) {
            case 'Registro de Consumo':
                await this.listagemRegistroConsumo.listar();
                break;
            case 'Mais Consumidos':
                await this.listagemMaisConsumidos.listar();
                break;
            case 'Voltar':
                console.clear();
                break;
        }
    }
}
