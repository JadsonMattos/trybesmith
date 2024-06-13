# Boas vindas ao repositório do projeto Trybesmith

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary>

Para este projeto, você vai criar uma loja de itens medievais, como aquelas espadas feitas sob encomenda para uma pessoa específica, no formato de uma _API_, utilizando _Typescript_ e _Sequelize_.

Você irá desenvolver as camadas de _Service_ e _Controllers_ da aplicação em seu código, utilizando _JWT_ para autenticar algumas rotas, além de testes para garantir o correto funcionamento delas. A aplicação terá _endpoints_ que darão suporte a operações de criação, leitura e atualização de informações.

---

⚠️ **Dicas Importantes** ⚠️:

- Não haverá Front-end neste projeto. Não se preocupe com a visualização das coisas, apenas com as funcionalidades e qualidade do seu código;

- Sua API deve ser desenvolvida dentro da pasta `./src`.
- Seus testes deverão ser desenvolvidos na raiz da aplicação, em um diretório chamado `tests`.

</details>

# Orientações específicas deste projeto

<details>
  <summary><strong>🐳 Especificações sobre uso do Docker</strong></summary>

> Rode os serviços `app-trybesmith` e `db` com o comando `docker-compose up -d --build`.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
- Esses serviços irão inicializar um container chamado `trybesmith_api` e outro chamado `trybesmith_db`.
- A partir daqui você pode rodar o container `trybesmith_api` via CLI ou abri-lo no VS Code.

  > Rode o comando `npm run db:reset` (este comando vai funcionar somente após a criação do tipos solicitados no requisito) para criar o banco de dados, as tabelas que serão utilizadas e populá-las.

  > Use o comando `docker exec -it trybesmith_api bash` para entrar no container.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Para visualizar o logs do nodemon em seu terminal use os seguintes comandos:

  > `docker ps`: para visualizar os containers ativos e pegar o `CONTAINER ID`;

  > `docker logs -f <id_do_container>`: para visualizar os logs do seu servidor com nodemon;

</details>

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary>

  1. Instale as dependências [**Caso existam**]

- `npm install`

</details>

# Requisitos

## Antes de começar

Implemente todos os tipos `Order`, `Product` e `User`, do projeto na pasta `src/types` de forma adequada. Isso é necessário para as _migrations_ rodarem.

**Atenção ⚠️:** Suas importações devem ter sempre caminhos relativos! O VSCode fará importações com caminhos absolutos automaticamente e isso pode causar erros que o módulo não foi encontrado.

## 1 - Crie um endpoint para o cadastro de produtos e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/products`);
- Os produtos enviados devem ser salvos na tabela `products` do banco de dados;
- O endpoint deve receber a seguinte estrutura:

```json
{
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
}
```

As ordens dos pedidos de id 1 a 3 já foram criados pelo seeders no banco de dados, sendo assim novos produtos devem passar um novo `orderId`, pois os produtos são exclusivos.

- Os testes devem garantir no mínimo 30% de cobertura do código das camadas `Service` e `Controller`.

> **De olho na dica 👀:**
>
> - Para construir seus testes use o método [`.build()`](https://sequelize.org/docs/v6/core-concepts/model-instances/#creating-an-instance) quando for necessário;
>
> - Lembre do _Type Assertion_ para testar tipos.

---

## 2 - Crie um endpoint para a listagem de produtos e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/products`);
- Os testes devem garantir no mínimo 50% de cobertura do código das camadas `Service` e `Controller`.

---

## 3 - Crie um endpoint para listar todos os pedidos e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/orders`).
- Essa rota deve retornar todos os pedidos e os `id`s dos produtos associados a estes.
- Os testes devem garantir no mínimo 60% de cobertura do código das camadas `Service` e `Controller`.

**De olho na dica 👀:** Todos os produtos são itens artesanais, portanto, únicos. Por isso são os produtos que contêm os `id`s dos pedidos.

**De olho na dica 👀:** Você precisará combinar a lógica de dois models aqui 😉

---

## 4 - Crie um endpoint para o login de pessoas usuárias e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/login`).

- A rota deve receber os campos `username` e `password`, e esses campos devem ser validados no banco de dados.

- Um token `JWT` deve ser gerado e retornado caso haja sucesso no _login_. No seu _payload_ deve estar presente o _id_ e _username_.

- O endpoint deve receber a seguinte estrutura:

```json
{
  "username": "string",
  "password": "string"
}
```

- Os testes devem garantir no mínimo 70% de cobertura do código das camadas `Service` e `Controller`.

---

## 5 - Crie as validações dos produtos e testes que cubram as funcionalidades deste endpoint

- Neste requisito iremos desenvolver validações referentes a criação do endpoint do requisito 1.
- Os testes devem garantir no mínimo 80% de cobertura do código das camadas `Service` e `Controller`.

---

## Requisitos Bônus

## 6 - Crie um endpoint para o cadastro de um pedido e testes que cubram as funcionalidades deste endpoint

- O endpoint deve ser acessível no caminho (`/orders`);
- Um pedido só pode ser criado caso a pessoa usuária esteja logada e o token `JWT` validado;
- Os pedidos enviados devem ser salvos na tabela `orders` do banco de dados, salvando `id` da pessoa usuária da aplicação que fez esse pedido;
- A tabela `products` também deve ser alterada, atualizando todos os produtos com os `id` incluídos na chave `productIds` da requisição, e adicionando nesses produtos o `orderId` do pedido recém criado;

- O endpoint deve receber a seguinte estrutura:

```json
{
  "productIds": [1, 2],
  "userId": 1
}
```

- Os testes devem garantir no mínimo 90% de cobertura do código das camadas `Service` e `Controller`.

**⚠️ Ao cadastrar um pedido, lembre-se de atualizar os respectivos produtos no banco de dados, incluindo neles o número do pedido criado.**

---
