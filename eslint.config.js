import js from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  globalIgnores([
    "**/lib/",
  ]),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      "eslint.config.js",
    ],
    extends: tseslint.configs.strictTypeChecked,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowInterfaces: "with-single-extends",
        },
      ],
      "@typescript-eslint/no-namespace": [
        "error",
        {
          allowDeclarations: true,
        },
      ],
    },
  },
  {
    files: ["test/**/*.{js,mjs,cjs,ts,mts,cts}"],
    rules: {
      "@typescript-eslint/no-floating-promises": "off",
    }
  },
])
