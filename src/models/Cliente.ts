import Compra from "./Compra"
import CPF from "./Cpf"
import Pet from "./Pet"
import Produto from "./Produto"
import RG from "./Rg"
import Servico from "./Servico"
import Telefone from "./Telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Compra>
    private servicosConsumidos: Array<Compra>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    
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
    
    public get getPets(): Array<Pet>{
        return this.pets
    }

    public adicionarPet(pet: Pet): void {
        this.pets.push(pet)
    }

    public removerPet(pet: Pet): void {
        this.pets = this.pets.filter(p => p !== pet)
    }
}