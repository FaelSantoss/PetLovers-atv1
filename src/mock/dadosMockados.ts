// src/mock/dadosMockados.ts
import Cliente from "../models/Cliente";
import CPF from "../models/Cpf";
import Pet from "../models/Pet";
import RG from "../models/Rg";
import Produto from "../models/Produto";
import Servico from "../models/Servico";
import Telefone from "../models/Telefone";
import Compra from "../models/Compra";

// CPF e RG fictícios
const cpf1 = new CPF("123.456.789-00", new Date(1990, 4, 15));
const rg1 = new RG("12.345.678-9", new Date(2010, 2, 25));
const cpf2 = new CPF("987.654.321-11", new Date(1985, 7, 22));
const rg2 = new RG("98.765.432-1", new Date(2005, 8, 12));

const cpf3 = new CPF("321.654.987-22", new Date(1993, 11, 30));
const rg3 = new RG("32.165.478-0", new Date(2015, 1, 10));
const cpf4 = new CPF("654.987.321-33", new Date(1988, 2, 11));
const rg4 = new RG("65.497.329-9", new Date(2011, 7, 5));

const cpf5 = new CPF("132.465.798-44", new Date(1975, 10, 3));
const rg5 = new RG("13.246.579-4", new Date(2003, 6, 17));
const cpf6 = new CPF("765.432.123-55", new Date(1995, 5, 25));
const rg6 = new RG("76.543.212-3", new Date(2018, 11, 30));

const cpf7 = new CPF("876.543.210-66", new Date(1981, 9, 8));
const rg7 = new RG("87.654.321-2", new Date(2009, 4, 12));
const cpf8 = new CPF("432.123.654-77", new Date(1999, 12, 22));
const rg8 = new RG("43.212.365-4", new Date(2020, 3, 15));

const cpf9 = new CPF("210.654.321-88", new Date(2000, 6, 14));
const rg9 = new RG("21.065.432-5", new Date(2019, 5, 7));
const cpf10 = new CPF("123.987.654-99", new Date(1989, 8, 9));
const rg10 = new RG("12.398.765-6", new Date(2007, 8, 18));

// Pets fictícios
const pet1 = new Pet("nina", "Ana Silva", "Buddy", "macho", "Dog");
const pet2 = new Pet("pitucho", "Ana Silva", "Whiskers", "femea", "Cat");
const pet3 = new Pet("marcos", "Carlos Souza", "Luna", "femea", "Rabbit");
const pet4 = new Pet("zeca", "Carlos Souza", "Simba", "macho", "Lion");
const pet5 = new Pet("bob", "Maria José", "Goldie", "femea", "Dog");
const pet6 = new Pet("totó", "Maria José", "Nemo", "macho", "Fish");
const pet7 = new Pet("caco", "Pedro Lopes", "Max", "macho", "Dog");
const pet8 = new Pet("gata", "Pedro Lopes", "Snowball", "femea", "Cat");
const pet9 = new Pet("lara", "Júlia Fernandes", "Dory", "femea", "Fish");
const pet10 = new Pet("neve", "Júlia Fernandes", "Bunny", "femea", "Rabbit");

// Produtos consumidos fictícios
const produto1 = new Produto("Shampoo para Cachorro", 20);
const produto2 = new Produto("Ração para Gato", 30);
const produto3 = new Produto("Ração para Coelho", 25);
const produto4 = new Produto("Shampoo para Gato", 18);
const produto5 = new Produto("Aquário", 100);
const produto6 = new Produto("Ração para Peixes", 15);
const produto7 = new Produto("Brinquedo para Cachorro", 10);
const produto8 = new Produto("Arranhador para Gatos", 50);
const produto9 = new Produto("Coleira", 12);
const produto10 = new Produto("Ração para Leão", 80);

// Serviços consumidos fictícios
const servico1 = new Servico("Banho e Tosa", 20);
const servico2 = new Servico("Consulta Veterinária", 50);
const servico3 = new Servico("Vacinação", 30);
const servico4 = new Servico("Exame de Sangue", 40);
const servico5 = new Servico("Tratamento Dental", 35);
const servico6 = new Servico("Castração", 120);
const servico7 = new Servico("Tosa Completa", 25);
const servico8 = new Servico("Consulta Exótica", 60);
const servico9 = new Servico("Tratamento de Pulgas", 25);
const servico10 = new Servico("Cirurgia", 200);

// Telefones fictícios
const telefone1 = new Telefone("12", "3456-7890");
const telefone2 = new Telefone("12", "98765-4321");
const telefone3 = new Telefone("11", "5432-1234");
const telefone4 = new Telefone("21", "5678-8765");
const telefone5 = new Telefone("31", "6789-9876");
const telefone6 = new Telefone("41", "7890-6543");
const telefone7 = new Telefone("51", "8901-3456");
const telefone8 = new Telefone("61", "9012-2345");
const telefone9 = new Telefone("71", "0123-4567");
const telefone10 = new Telefone("81", "1234-5678");

// Criando instâncias de clientes
const cliente1 = new Cliente("Ana Silva", "Ana", cpf1);
cliente1.getRgs.push(rg1);
cliente1.getPets.push(pet1, pet2);
cliente1.getProdutosConsumidos.push(new Compra(produto1.nome, produto1.preco, 2));
cliente1.getServicosConsumidos.push(new Compra(servico1.nome, servico1.preco, 1));
pet1.getProdutosConsumidos.push(new Compra(produto1.nome, produto1.preco, 2));
pet1.getServicosConsumidos.push(new Compra (servico1.nome, servico1.preco, 1));
cliente1.getTelefones.push(telefone1);

const cliente2 = new Cliente("Carlos Souza", "Carlos", cpf2);
cliente2.getRgs.push(rg2);
cliente2.getPets.push(pet3, pet4);
cliente2.getProdutosConsumidos.push(new Compra(produto2.nome, produto2.preco, 1));
cliente2.getServicosConsumidos.push(new Compra(servico2.nome, servico2.preco, 1));
pet2.getProdutosConsumidos.push(new Compra(produto2.nome, produto2.preco, 2));
pet2.getServicosConsumidos.push(new Compra (servico2.nome, servico2.preco, 1));
cliente2.getTelefones.push(telefone2);

const cliente3 = new Cliente("Maria José", "Maria", cpf3);
cliente3.getRgs.push(rg3);
cliente3.getPets.push(pet5, pet6);
cliente3.getProdutosConsumidos.push(new Compra(produto3.nome, produto3.preco, 3));
cliente3.getServicosConsumidos.push(new Compra(servico3.nome, servico3.preco, 1));
pet3.getProdutosConsumidos.push(new Compra(produto3.nome, produto3.preco, 2));
pet3.getServicosConsumidos.push(new Compra (servico3.nome, servico3.preco, 1));
cliente3.getTelefones.push(telefone3);

const cliente4 = new Cliente("Pedro Lopes", "Pedro", cpf4);
cliente4.getRgs.push(rg4);
cliente4.getPets.push(pet7, pet8);
cliente4.getProdutosConsumidos.push(new Compra(produto4.nome, produto4.preco, 2));
cliente4.getServicosConsumidos.push(new Compra(servico4.nome, servico4.preco, 1));
pet4.getProdutosConsumidos.push(new Compra(produto4.nome, produto4.preco, 2));
pet4.getServicosConsumidos.push(new Compra (servico4.nome, servico4.preco, 1));
cliente4.getTelefones.push(telefone4);

const cliente5 = new Cliente("Júlia Fernandes", "Júlia", cpf5);
cliente5.getRgs.push(rg5);
cliente5.getPets.push(pet9, pet10);
cliente5.getProdutosConsumidos.push(new Compra(produto5.nome, produto5.preco, 1));
cliente5.getServicosConsumidos.push(new Compra(servico5.nome, servico5.preco, 1));
pet5.getProdutosConsumidos.push(new Compra(produto5.nome, produto5.preco, 2));
pet5.getServicosConsumidos.push(new Compra (servico5.nome, servico5.preco, 1));
cliente5.getTelefones.push(telefone5);

const cliente6 = new Cliente("Paulo Lima", "Paulo", cpf6);
cliente6.getRgs.push(rg6);
cliente6.getPets.push(pet1);
cliente6.getProdutosConsumidos.push(new Compra(produto6.nome, produto6.preco, 5));
cliente6.getServicosConsumidos.push(new Compra(servico6.nome, servico6.preco, 1));
pet6.getProdutosConsumidos.push(new Compra(produto6.nome, produto6.preco, 2));
pet6.getServicosConsumidos.push(new Compra (servico6.nome, servico6.preco, 1));
cliente6.getTelefones.push(telefone6);

const cliente7 = new Cliente("Larissa Costa", "Larissa", cpf7);
cliente7.getRgs.push(rg7);
cliente7.getPets.push(pet2);
cliente7.getProdutosConsumidos.push(new Compra(produto7.nome, produto7.preco, 1));
cliente7.getServicosConsumidos.push(new Compra(servico7.nome, servico7.preco, 1));
pet7.getProdutosConsumidos.push(new Compra(produto7.nome, produto7.preco, 2));
pet7.getServicosConsumidos.push(new Compra (servico7.nome, servico7.preco, 1));
cliente7.getTelefones.push(telefone7);

const cliente8 = new Cliente("Roberto Santos", "Roberto", cpf8);
cliente8.getRgs.push(rg8);
cliente8.getPets.push(pet3);
cliente8.getProdutosConsumidos.push(new Compra(produto8.nome, produto8.preco, 2));
cliente8.getServicosConsumidos.push(new Compra(servico8.nome, servico8.preco, 1));
pet8.getProdutosConsumidos.push(new Compra(produto8.nome, produto8.preco, 2));
pet8.getServicosConsumidos.push(new Compra (servico8.nome, servico8.preco, 1));
cliente8.getTelefones.push(telefone8);

const cliente9 = new Cliente("Mariana Silva", "Mariana", cpf9);
cliente9.getRgs.push(rg9);
cliente9.getPets.push(pet4);
cliente9.getProdutosConsumidos.push(new Compra(produto9.nome, produto9.preco, 1));
cliente9.getServicosConsumidos.push(new Compra(servico9.nome, servico9.preco, 1));
pet9.getProdutosConsumidos.push(new Compra(produto9.nome, produto9.preco, 2));
pet9.getServicosConsumidos.push(new Compra (servico9.nome, servico9.preco, 1));
cliente9.getTelefones.push(telefone9);

const cliente10 = new Cliente("Felipe Alves", "Felipe", cpf10);
cliente10.getRgs.push(rg10);
cliente10.getPets.push(pet5);
cliente10.getProdutosConsumidos.push(new Compra(produto10.nome, produto10.preco, 1));
cliente10.getServicosConsumidos.push(new Compra(servico10.nome, servico10.preco, 1));
pet10.getProdutosConsumidos.push(new Compra(produto10.nome, produto10.preco, 2));
pet10.getServicosConsumidos.push(new Compra (servico10.nome, servico10.preco, 1));
cliente10.getTelefones.push(telefone10);

// Exportando os dados mockados
export const clientes = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10];
export const produtos = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10];
export const servicos = [servico1, servico2, servico3, servico4, servico5, servico6, servico7, servico8, servico9, servico10];
