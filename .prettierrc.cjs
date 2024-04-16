/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 80,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '^react$',
    '^@/components/(.*)$',
    '^@/queries/(.*)$',
    '^@/hooks/(.*)$',
    '^@/services/(.*)$',
    '^@/stores/(.*)$',
    '^@/ui/(.*)$',
    '^[@/]',
    '^[../]',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
}
