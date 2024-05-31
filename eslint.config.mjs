import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginNext from '@next/eslint-plugin-next';
import pluginReact from 'eslint-plugin-react';
import pluginReactHook from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHook,
      import: pluginImport,
      '@next/next': pluginNext
    },
    ignores: ['node_modules/', '.next/', 'public/', '*.md'],
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx']
        }
      }
    },
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: true
        }
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['sibling', 'parent'],
            'index',
            'unknown'
          ],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: false
          }
        }
      ]
    }
  }
];
