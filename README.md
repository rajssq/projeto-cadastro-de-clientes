# Cadastro de Clientes

Projeto full-stack para cadastro de clientes, com uma API em Node.js (TypeScript, Express e Prisma) e uma interface construída com React + Vite.

## 📁 Estrutura do Projeto

---

## 🚀 Funcionalidades

- Cadastro de clientes
- Listagem de clientes
- Exclusão de clientes
- Integração com banco de dados via Prisma ORM
- Interface moderna com React

---

## 🧪 Tecnologias Utilizadas

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- MongoDB (adaptável a outros bancos com Prisma)

### Frontend
- React
- TypeScript
- Vite
- TailwindCSS (se usado)

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (v18+ recomendado)
- Gerenciador de pacotes: npm ou yarn
- MongoDB (instância local ou na nuvem)
- (Opcional) Docker

---

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
- POST /customers: Cria um novo cliente
- DELETE /customers/:id: Deleta um cliente pelo ID
---

### 📝 Observações
- O backend já está preparado para uso com Prisma e MongoDB, podendo ser adaptado facilmente para outros bancos de dados suportados pelo Prisma.
- O frontend utiliza Vite para desenvolvimento rápido com React.
