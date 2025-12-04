React + TypeScript + Vite – Product Showcase

🚀 Este template fornece uma configuração mínima para iniciar projetos React com Vite, TypeScript e ESLint, incluindo Hot Module Replacement (HMR) para desenvolvimento rápido.

🌐 Demo online: Visualizar Projeto

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

🌐 Demo Online: https://leoterrymaster.github.io/pokemon/#/

📝 Documentação Vite: https://vitejs.dev/

⚛️ Documentação React: https://react.dev/

🔧 Tailwind CSS: https://tailwindcss.com/