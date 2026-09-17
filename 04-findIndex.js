/**
*==================================================================================
MÉTODO: findIndex()
*==================================================================================
*Função: Retorna a POSIÇÃO (INDiCE 0, 1, 2 ... ) do primeiro item que atende
* à condição. Se não encontrar, retorna -1.
*==================================================================================
*/

console.log(" ===EXEMPLOS COM findIndex() === \n");

// Exemplo 1 (Básico): Posição de um valor primitivo

console.log(" --- Exemplo 1: Posição do primeiro maior de idade (Básico) --- ");

const idades = [12, 15, 17, 20, 25];

const indiceMaiorDeIdade = idades.findIndex((idade) => idade >= 18);

console.log("Idades:", idades);
console.log(`Primeiro maior de idade está no indice: ${indiceMaiorDeIdade} (Valor: ${idades[indiceMaiorDeIdade]})`);
console.log("\n");
