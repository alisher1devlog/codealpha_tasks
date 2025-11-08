import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

// Prettier'ni import qilamiz
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      // Buni "node" ga o'zgartiramiz, chunki bu server loyihasi
      globals: globals.node,
    },
  },

  // Prettier'ni eng oxiriga qo'shamiz. Bu ESLint'ga
  // formatlashni Prettier'ga topshirishni aytadi.
  prettierConfig,
])
