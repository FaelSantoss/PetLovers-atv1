import Compra from "./Compra"
import Produto from "./Produto"
import Servico from "./Servico"

export default class Pet {
    private nome: string
    private nomeDono: string
    private tipo: string
    private raca: string
    private genero: string
    private produtosConsumidos: Array<Compra>
    private servicosConsumidos: Array<Compra>

    constructor(nome: string, nomeDono: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.nomeDono = nomeDono
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getNome(){return this.nome}
    public get getNomeDono(){return this.nomeDono}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}

    public get getProdutosConsumidos(): Array<Compra> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Compra> {
        return this.servicosConsumidos
    }

    public adicionarProdutoConsumido(compra: Compra): void {
        this.produtosConsumidos.push(compra);
    }
    
    public adicionarServicoConsumido(compra: Compra): void {
        this.servicosConsumidos.push(compra);
    }
}