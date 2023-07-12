<h1 align="center">Pools API</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/ManuCoutinho/pools-api?color=363636&style=for-the-badge">
  <img alt="Languages" src="https://img.shields.io/github/languages/count/ManuCoutinho/pools-api?color=363636&style=for-the-badge">
</p>

<p align="center">
  <a href="#yarn-about">Sobre</a> &#xa0; | &#xa0; 
  <a href="#minidisc-requirements">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Iniciando</a> &#xa0; 
</p>

<br>

## :yarn: Sobre

Este projeto fornece uma API para criação de palpites de jogos. Inicialmente foi idealizada como bolão para jogos da copa do mundo de futebol, mas pode ser facilmente adaptada para outros esportes e/ou eventos.

A API atualmente contém as seguintes rotas:

```bash

  GET /pools/count

  GET /users/count

  ET /guesses/count

# rota para criação de novas apostas. 
  POST /pools
  #payload
  {
    "title": "string"
  }

``````

## :minidisc: Requerimentos

Antes de iniciar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) versão LTS instalados no seu ambiente de desenvolvimento.

Para utilização da API recomenda-se a utilização das ferramentas [Docker](https://www.docker.comm) e [docker compose](https://docs.docker.com/compose/).

O passo-a-passo a seguir considerará que você está utilizando as ferramentas acima recomendadas.
Outra alternativa recomendada é a utilização da ferramenta _Dev Containers_ do Vscode, por meio da opção "docker compose".

Para que a API funcione plenamente são necessárias as variáveis de ambiente descritas no arquivo `.env.example`.

## :checkered_flag: Iniciando

```bash
# Clone este projeto
$ git clone https://github.com/ManuCoutinho/pools-api.git

# Acesse o projeto
$ cd pools-server

# Inicie o projeto com docker compose
# Este comando irá baixar as imagens do node, postgres e pgadmin4, instalar as dependencias necessárias e iniciar o Prisma com a tabela Mensseger
$ docker compose up

# Neste ponto o servidor de desenvolvimento estará rodando em <http://localhost:3333>

# Acesse o projeto atravé de um terminal secundário e execute:
$ docker compose exec server bash

# Após iniciar o bash do container, realize a migration do seu banco de dados
$ npx prisma migrate dev

# Prontinho, seu front-end pode ser conectado
```

<a href="#top">⬆️</a>