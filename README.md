README - Testes com Jest em TypeScript
Este repositório contém testes unitários desenvolvidos utilizando a ferramenta Jest em TypeScript. O objetivo dos testes é verificar se as funções implementadas no código são capazes de retornar resultados esperados para diferentes entradas.

Funções testadas
Abaixo está a explicação de cada teste presente no código:

temperatureConvert: testa a conversão de temperatura de graus Celsius para Fahrenheit.

Teste 1: Verifica se a função converte corretamente 0°C para 32°F;
Teste 2: Verifica se a função converte corretamente 25°C para 77°F;
Teste 3: Verifica se a função converte corretamente -10°C para 14°F;
Teste 4: Verifica se a função converte corretamente 100°C para 212°F.
sortedList: testa a ordenação de uma lista.

Teste 1: Verifica se a função retorna true para uma lista vazia;
Teste 2: Verifica se a função retorna true para uma lista com um elemento;
Teste 3: Verifica se a função retorna true para uma lista em ordem crescente;
Teste 4: Verifica se a função retorna true para uma lista em ordem decrescente;
Teste 5: Verifica se a função retorna false para uma lista desordenada.
ePrimo: testa se um número é primo.

Teste 1: Verifica se a função retorna true para o número 7;
Teste 2: Verifica se a função retorna false para o número 10;
Teste 3: Verifica se a função retorna true para o número 17;
Teste 4: Verifica se a função retorna false para o número 100;
Teste 5: Verifica se a função retorna false para números menores ou iguais a 1.
e_Palindrome: testa se uma palavra ou número é um palíndromo.

Teste 1: Verifica se a função retorna true para a palavra "arara";
Teste 2: Verifica se a função retorna false para a palavra "palavra";
Teste 3: Verifica se a função retorna true para o número "12321";
Teste 4: Verifica se a função retorna false para o número "12345".
isSorted: testa se uma lista está ordenada.

Teste 1: Verifica se a função retorna true para uma lista ordenada;
Teste 2: Verifica se a função retorna false para uma lista não ordenada;
Teste 3: Verifica se a função retorna true para uma lista com um elemento;
Teste 4: Verifica se a função retorna true para uma lista vazia.
factorial: testa o cálculo do fatorial de um número.

Teste 1: Verifica se a função retorna 1 para o fatorial de 0;
Teste 2: Verifica se a função retorna 1 para o fatorial de 1;
Teste 3: Verifica se a função retorna 120 para o fatorial de 5;
Teste 4: Verifica se a função retorna 3628800 para o fatorial de 10.

Teste de cálculo de média (calculateAverage):
Teste 1: Verifica se a função retorna 0 para uma lista vazia;
Teste 2: Verifica se a função retorna a média correta para uma lista com elementos positivos.
Teste 3: Verifica se a função retorna a média correta para uma lista com elementos negativos.
Teste 4: Verifica se a função retorna a média correta para uma lista com elementos positivos e negativos.