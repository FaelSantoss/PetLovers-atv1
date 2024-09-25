import Cliente from "./Cliente";
import Produto from "./Produto";
import Servico from "./Servico";

export default class Empresa {
    private clientes: Cliente[];
    private produtos: Produto[];
    private servicos: Servico[];

    constructor(clientes: Cliente[] = [], produtos: Produto[] = [], servicos: Servico[] = []) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }

    public get getClientes(): Cliente[] {
        return this.clientes;
    }

    public get getProdutos(): Produto[] {
        return this.produtos;
    }

    public get getServicos(): Servico[] {
        return this.servicos;
    }
}