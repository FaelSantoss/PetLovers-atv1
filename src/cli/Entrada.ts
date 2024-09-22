import inquirer from 'inquirer';

export class Entrada {
    public async receberNumero(mensagem: string): Promise<number> {
        const answer = await inquirer.prompt([
            { 
                type: 'input',
                name: 'valor',
                message: mensagem 
            },
        ]);

        const numero = Number(answer.valor);

        if (isNaN(numero)) {
            console.log("Por favor, insira um número válido.");
            return this.receberNumero(mensagem);
        }
        return numero;
    }

    public async receberTexto(mensagem: string): Promise<string> {
        const answer = await inquirer.prompt([
            { 
                type: 'input',
                name: 'valor',
                message: mensagem 
            },
        ]);
        return answer.valor;
    }

    public async receberSelect(message: string, options: string[]): Promise<string> {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                message,
                name: 'action',
                choices: options.map((option) => ({
                    name: option,
                    value: option,
                }))
            }
        ])
        return answer.action
    }
}
