# Parque de Diversões - Backend API

Backend API para plataforma completa de parque de diversões, incluindo informações institucionais, venda de ingressos, catálogo de atrações e gestão de eventos.

## Tecnologias

- **Runtime**: Node.js
- **Framework**: Express.js
- **Linguagem**: TypeScript
- **Validação**: Zod
- **Testes**: Jest

## Estrutura do Projeto

```
src/
├── api/                    # API Controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── types/                  # TypeScript type definitions
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## Instalação

```bash
npm install
```

## Configuração

Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente:

```bash
cp .env.example .env
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm start` - Inicia o servidor em modo produção
- `npm test` - Executa os testes
- `npm run lint` - Verifica o código com ESLint
- `npm run lint:fix` - Corrige problemas do ESLint automaticamente

## Desenvolvimento

### Executar em modo desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

### Health Check

Verifique o status do servidor:

```bash
curl http://localhost:3000/health
```

## API Endpoints

### Base URL

- Desenvolvimento: `http://localhost:3000/api/v1`
- Produção: `https://api.yourdomain.com/api/v1`

### Estrutura de Rotas

- `/api/v1/external/*` - Endpoints públicos
- `/api/v1/internal/*` - Endpoints autenticados

## Testes

```bash
npm test
```

## Build para Produção

```bash
npm run build
npm start
```

## Padrões de Código

- TypeScript strict mode habilitado
- ESLint para qualidade de código
- Indentação: 2 espaços
- Aspas simples para strings
- Ponto e vírgula obrigatório
- Máximo 120 caracteres por linha

## Estrutura de Resposta

### Sucesso

```json
{
  "success": true,
  "data": {},
  "metadata": {
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

### Erro

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message",
    "details": {}
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Licença

ISC