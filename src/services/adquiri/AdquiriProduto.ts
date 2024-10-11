    import Cliente from '../../models/Cliente';
    import { Adquiri } from './Adquiri';
    import { Entrada } from '../../cli/Entrada';
    import Produto from '../../models/Produto';
import Compra from '../../models/Compra';

    export class AdquiriProduto extends Adquiri {
        private clientes: Cliente[];
        private produtos: Produto[];
        private entrada: Entrada;

        constructor(clientes: Cliente[], produtos: Produto[]) {
            super();
            this.clientes = clientes;
            this.produtos = produtos
            this.entrada = new Entrada();
        }

        public async adquirir(): Promise<void> {
            const nomeCliente = await this.entrada.receberTexto('Digite o nome do cliente:');
            const nomePet = await this.entrada.receberTexto('Digite o nome do pet ao qual vai ser destinado o produto:');
            const nomeProduto = await this.entrada.receberTexto('Digite o nome do produto:');
            const quantidade = parseInt(await this.entrada.receberTexto('Digite a quantidade do produto:'));

            const cliente = this.clientes.find(c => c.nome === nomeCliente);
            if (!cliente) {
                console.log('Cliente não encontrado!');
                return;
            }

            const pet = cliente.getPets.find(p => p.getNome === nomePet);
            if (!pet) {
                console.log('Pet não encontrado!');
                return;
            }

            const produto = this.produtos.find(p => p.nome === nomeProduto);
            if (!produto) {
                console.log('Produto não encontrado!');
                return;
            }  
            const compra = new Compra(produto.nome, produto.preco, quantidade);

            pet.adicionarProdutoConsumido(compra)
            cliente.adicionarProdutoConsumido(compra)
            
            console.log('Compra realizada com sucesso!');
        }
    }
