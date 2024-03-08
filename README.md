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
   git clone [URL_DO_REPOSITÓRIO]
   cd [NOME_DO_DIRETÓRIO]
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
   CREATE TABLE clientes (
       id SERIAL PRIMARY KEY,
       nome VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       telefone VARCHAR(20),
       coordenada_x INTEGER,
       coordenada_y INTEGER
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
