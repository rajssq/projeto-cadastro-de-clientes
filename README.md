# Cadastro de Clientes

Projeto full-stack para cadastro de clientes, com uma API em Node.js (TypeScript, Fastify e Prisma) e uma interface construída com React.js + Vite.

<video width="640" height="360" autoplay muted loop>
  <source src="/apresentacao.mp4" type="video/mp4">
</video>

## 📁 Estrutura do Projeto

---

## 🚀 Funcionalidades

- Cadastro de clientes
- Listagem de clientes
- Exclusão de clientes
- Integração com banco de dados via Prisma ORM
- Interface moderna com React

## 🧪 Tecnologias Utilizadas

### Backend

- Node.js
- Fastify
- TypeScript
- Prisma ORM
- MongoDB (adaptável a outros bancos com Prisma)

### Frontend

- React
- TypeScript
- Vite
- Axios

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (v18+ recomendado)
- Gerenciador de pacotes: npm ou yarn
- MongoDB (instância local ou na nuvem)

### 🔙 Rodando o Backend

```bash
cd backend
npm install
```

Configure o arquivo .env com a URL do banco MongoDB:

```bash
DATABASE_URL="mongodb+srv://<user>:<password>@<cluster>/<dbname>?retryWrites=true&w=majority"
```

Rode as migrações e inicie a API:

```bash
npx prisma generate
npm run dev
```

### O servidor estará disponível em http://localhost:3333.

---

### 🎨 Rodando o Frontend

```bash
cd frontend
npm install
npm run dev
```

### O frontend estará disponível em http://localhost:5173.

---

### 📬 Endpoints da API

- GET /customers: Lista todos os clientes
- POST /customer: Cria um novo cliente
- DELETE /customer/:id: Deleta um cliente pelo ID

---

### 📝 Observações

- O backend utiliza Fastify como servidor web e Prisma para acesso ao banco de dados.
- O frontend usa Axios para consumir a API.
- Projeto é ideal para aprendizado.
