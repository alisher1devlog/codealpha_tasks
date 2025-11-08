import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },

    // MANA SHU YERDA XATO BOR EDI (QO'SHTIRNOQLAR OLIB TASHLANDI)
    extends: [js.configs.recommended],

    languageOptions: {
      globals: globals.node,
    },
  },
  prettierConfig,
])
