# API de Gerenciamento de Clientes

Esta API foi desenvolvida para gerenciar clientes de uma empresa de limpeza residencial. Ela permite o cadastro, a listagem e a organização de clientes por proximidade, facilitando a otimização das rotas de atendimento.

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Swagger para documentação da API

## Configuração Inicial

### Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- PostgreSQL instalado e rodando
- Cliente de linha de comando ou GUI para PostgreSQL

### Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/Raphaelbsi/backend.git
   cd backend
   ```

2. Instale as dependências necessárias:

   ```bash
   npm install
   ```

   ou, se você preferir usar Yarn:

   ```bash
   yarn install
   ```

3. Crie um banco de dados no PostgreSQL e execute os scripts SQL para criar as tabelas necessárias. Exemplo:

   ```sql
   CREATE DATABASE nome_do_banco;
   ```

   ```sql
   CREATE TABLE IF NOT EXISTS clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    coordenada_x bigint,
    coordenada_y bigint,
    criado_em TIMESTAMP WITHOUT TIME ZONE DEFAULT (NOW() AT TIME ZONE 'UTC')
   );
   ```

4. Configure as variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e ajuste os valores conforme necessário para refletir suas configurações locais de banco de dados e outras configurações relevantes.

### Executando a API

Para iniciar a API localmente, execute:

```bash
npm run dev
```

# Documentação da API com Swagger

Após iniciar a aplicação, acesse http://localhost:3000/api-docs para visualizar a documentação Swagger da API. Aqui você pode encontrar detalhes sobre os endpoints disponíveis, seus parâmetros e como testá-los diretamente através da interface do Swagger.

Endpoints Disponíveis
POST /clientes: Cadastrar um novo cliente.
GET /clientes: Listar todos os clientes.
GET /rota: Obter uma lista de clientes ordenados pela proximidade com a empresa.

# Caso queira subir um contêiner do banco de dados para testar localmente, basta seguir os passos abaixo.

## Configuração Usando Docker

Se você tem o Docker instalado em sua máquina, pode configurar e executar uma instância do PostgreSQL usando `docker-compose`. Isso simplifica o processo de configuração do banco de dados, pois não é necessário instalar o PostgreSQL manualmente.

### Pré-requisitos

- Docker e Docker Compose instalados na sua máquina.

### Passos para Execução

1. **Subir o Banco de Dados**: No diretório raiz do projeto, onde o arquivo `docker-compose.yml` está localizado, execute o seguinte comando para iniciar um contêiner do PostgreSQL:

   ```bash
   docker-compose up -d
   ```

   Isso irá iniciar um contêiner Docker em background com uma instância do PostgreSQL. A flag `-d` é usada para rodar o contêiner em "detached mode", ou seja, em segundo plano.

2. **Verificar o Contêiner**: Você pode verificar se o contêiner está rodando corretamente com:

   ```bash
   docker ps
   ```

3. **Conectar ao Banco de Dados**: Com o contêiner rodando, você pode conectar-se ao banco de dados usando qualquer cliente PostgreSQL, apontando para `localhost` na porta configurada (padrão: 5432). As credenciais e o nome do banco de dados estarão conforme configurado no seu `docker-compose.yml`.

### Parar o Contêiner

Quando terminar, você pode parar e remover o contêiner do PostgreSQL com:

````bash
docker-compose down


# docker-compose.yml Exemplo

```bash
version: '3.8'
services:
  db:
    image: postgres
    environment:
      POSTGRES_DB: nome_do_seu_banco
      POSTGRES_USER: seu_usuario
      POSTGRES_PASSWORD: sua_senha
    ports:
      - "5432:5432"
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:

````
