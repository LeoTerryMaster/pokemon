React + TypeScript + Vite – Product Showcase

🚀 Este template fornece uma configuração mínima para iniciar projetos React com Vite, TypeScript e ESLint, incluindo Hot Module Replacement (HMR) para desenvolvimento rápido.

🌐 Demo online: [Visualizar Projeto](https://leoterrymaster.github.io/pokemon/#/)

Funcionalidades Implementadas

Hospedagem: Deploy do site estático no GitHub Pages.
Filtro: Campo de <input> na tela Home para filtrar a lista de Pokémon por nome (client-side).
Context API: Criação de um "Time Pokémon" que permite favoritar até 6 Pokémon e exibir os favoritos no site.
Cache: Dados recebidos da API são armazenados em cache local para melhorar performance.
Atualização: Possibilidade de atualizar a lista de Pokémon e a lista de favoritos, respeitando o cache.

Plugins Oficiais Disponíveis

@vitejs/plugin-react

Utiliza Babel (ou oxc
 quando usado em rolldown-vite
) para Fast Refresh.

@vitejs/plugin-react-swc

Utiliza SWC para Fast Refresh.

React Compiler

O React Compiler não está habilitado neste template por questões de desempenho no desenvolvimento e build.
Para habilitar: React Compiler Installation

Configuração ESLint Avançada

Para projetos de produção, é recomendado habilitar regras type-aware:

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked, // Regras TypeScript recomendadas
      // tseslint.configs.strictTypeChecked,    // Regras mais estritas (opcional)
      // tseslint.configs.stylisticTypeChecked, // Regras de estilo (opcional)
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

Plugins ESLint para React

eslint-plugin-react-x

eslint-plugin-react-dom

Exemplo de configuração:

import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

Links Úteis

🌐 Demo Online: https://leoterrymaster.github.io/pokemon/#/<br>
📝 Documentação Vite: https://vitejs.dev/<br>
⚛️ Documentação React: https://react.dev/<br>
🔧 Tailwind CSS: https://tailwindcss.com/<br>



📂 Seção 1: Instruções para rodar

Variáveis de ambiente necessárias:
Nenhuma variável obrigatória para rodar localmente, apenas acesso à internet para consumir a API do PokeAPI
.

Instalar dependências:

npm install

Rodar o projeto em modo desenvolvimento:

npm run dev

Acesse em: http://localhost:5173

Build para produção:
npm run build


Deploy no GitHub Pages:
npm run deploy


Toda vez que editar algo precisa usar os comandos
npm run build
npm run deploy

🎨 Seção 2: Decisões de design

Estrutura de pastas escolhida:
src/pages → telas principais (Home, Details)
src/routes → rotas do React Router



Essa estrutura mantém o projeto modular e escalável, facilitando a adição de novas funcionalidades.
Maior dificuldade e solução:
Integrar favoritos do Time Pokémon com cache local para que os dados persistissem mesmo após reload.
Solução: usei Context API + Local Storage, garantindo limite de 6 Pokémon favoritos e atualização da lista.

O que não deu tempo de fazer:
Melhorar a UI/UX com animações ou detalhes gráficos.
Caso tivesse mais tempo: adicionaria loading skeletons, mensagens de erro personalizadas e paginamento da lista de Pokémon.

🌐 Seção 3: Link para Deploy (Bônus)

Demo Online: https://leoterrymaster.github.io/pokemon/#/

💡 Seção Final: Recomendações

Usar HashRouter para deploy no GitHub Pages, evitando 404 em rotas internas.
Configurar vite.config.ts com base dinâmico para dev/prod:
base: process.env.NODE_ENV === 'production' ? '/pokemon/' : '/'


Implementar cache local para melhorar performance da API e experiência do usuário.
Futuramente, considerar:
Paginação e filtros avançados.
UI responsiva e animações.
Testes unitários e integração com React Testing Library.