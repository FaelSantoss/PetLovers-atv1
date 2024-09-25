export default class Pet {
    private nome: string
    private nomeDono: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(nome: string, nomeDono: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.nomeDono = nomeDono
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public get getNome(){return this.nome}
    public get getNomeDono(){return this.nomeDono}
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}
}