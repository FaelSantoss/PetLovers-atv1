export default class Compra {
    public nome: string;
    public preco: number;
    public quantidade: number;

    constructor(nome: string, preco: number, quantidade: number = 1) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public getValorTotal(): number {
        return this.preco * this.quantidade;
    }
}
