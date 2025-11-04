# Parque de Diversões - Frontend

Plataforma web completa para um parque de diversões com funções informativas, venda de ingressos e apresentação de atrações.

## Tecnologias

- React 19.2.0
- TypeScript 5.9.3
- Vite 7.1.9
- TailwindCSS 3.4.14
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Axios 1.12.2
- React Hook Form 7.63.0
- Zod 4.1.11

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── main.tsx           # Entry point
│   ├── App.tsx            # Componente raiz
│   ├── router.tsx         # Configuração de rotas
│   └── providers.tsx      # Providers globais
├── core/                  # Componentes e lógica compartilhada
│   ├── components/        # Componentes UI reutilizáveis
│   └── lib/              # Configurações de bibliotecas
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Configurar variáveis de ambiente
# Edite o arquivo .env com as configurações do backend
```

## Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint do código
npm run lint
```

## Variáveis de Ambiente

```env
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Funcionalidades Principais

### Implementadas
- ✅ Estrutura base da aplicação
- ✅ Sistema de roteamento
- ✅ Layout responsivo com header e footer
- ✅ Página inicial (landing page)
- ✅ Componentes UI reutilizáveis (Button, Container, LoadingSpinner)
- ✅ Configuração de API client (REST)
- ✅ Integração com TanStack Query

### A Implementar
- ⏳ Página de atrações
- ⏳ Sistema de venda de ingressos
- ⏳ Página de contato
- ⏳ Sistema de autenticação
- ⏳ Painel administrativo
- ⏳ Programa de fidelidade
- ⏳ Sistema de avaliações

## Padrões de Código

### Componentes
- Usar TypeScript para todos os componentes
- Separar lógica em hooks customizados quando apropriado
- Documentar componentes com JSDoc
- Seguir padrão de nomenclatura PascalCase

### Estilização
- Usar TailwindCSS para estilização
- Criar variantes de componentes quando necessário
- Manter consistência visual com o design system

### API
- Usar `publicClient` para endpoints públicos
- Usar `authenticatedClient` para endpoints autenticados
- Implementar tratamento de erros adequado
- Usar TanStack Query para cache e gerenciamento de estado do servidor

## Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
2. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
3. Push para a branch (`git push origin feature/nova-feature`)
4. Abra um Pull Request

## Licença

Proprietary - Todos os direitos reservados