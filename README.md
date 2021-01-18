# FrontendTesteVeiculos

Esse projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 11.0.7.

## Como utilizar

Utilize `ng serve` para criar um servidor local em  `http://localhost:4200/`. 

## Rotas utilizadas

Este projeto utiliza a api `http://www.fipeapi.appspot.com` para consulta de modelo de veiculos.

Os endpoints em uso são:


- Listagem de marcas: `/marcas`
- Listagem de modelos por marca: `veiculos/{idMarca}`
- Listagem de versão por modelo: `/veiculo/{idMarca}/{idModelo}`
- Listagem de veiculo específico por ano: `veiculo/${idMarca}/${idModelo}/${idVeiculo}`

## Variaveis de ambiente

- `production` : booleano que indica o ambiente em uso.
- `BASE_URL` : string que indica a url base da api de consulta.

## Estilo

Este projeto é feito com `scss` contendo dois arquivos globais.

- styles.scss
- variables.scss

## Testes 

A cobertura de testes pode ser validada com `npm run test`. Usando como módulo de testes a lib `jest`.