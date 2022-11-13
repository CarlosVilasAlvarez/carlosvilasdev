module.exports = {
  printWidth: 80,
  tabWidth: 4,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: false,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '.prettierrc.js',
      options: { tabWidth: 2 },
    },
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
    {
      files: '*.json',
      options: {
        tabWidth: 2,
      },
    },
    {
      files: '*.svg',
      options: {
        parser: 'html',
      },
    },
  ],
};
