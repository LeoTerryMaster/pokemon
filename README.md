# React + TypeScript + Vite – Product Showcase

🚀 Este template fornece uma configuração mínima para iniciar projetos React com Vite, TypeScript e ESLint, incluindo **Hot Module Replacement (HMR)** para desenvolvimento rápido.

Acesse o projeto publicado no GitHub Pages:  
🌐 **[Visualizar Demo](https://leoterrymaster.github.io/pokemon/#/)**

---

## Plugins Oficiais Disponíveis

Atualmente, dois plugins oficiais para React estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)  
  Utiliza **Babel** (ou [oxc](https://oxc.rs) quando usado em [rolldown-vite](https://vite.dev/guide/rolldown)) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)  
  Utiliza **SWC** para Fast Refresh.

---

## React Compiler

O React Compiler não está habilitado neste template por questões de desempenho no dev e build.  
Para habilitar, veja a documentação oficial: [React Compiler Installation](https://react.dev/learn/react-compiler/installation)

---

## Configuração ESLint Avançada

Para projetos de produção, é recomendado atualizar a configuração para habilitar regras **type-aware**:

```js
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
Você também pode adicionar plugins específicos para React:

eslint-plugin-react-x

eslint-plugin-react-dom

Exemplo de configuração:

js
Copiar código
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