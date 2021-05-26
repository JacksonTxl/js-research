// doc see https://prettier.io/docs/en/configuration.html
module.exports = {
  singleQuote: true,
  semi: false,
  htmlWhitespaceSensitivity: 'ignore',
  endOfLine: 'auto',
  trailingComma: 'none',
  overides: [
    {
      files: '*.d.ts',
      options: {
        singleQuote: false
      }
    },
    {
      files: '*.js',
      options: {
        semi: true
      }
    },
    {
      files: ['*.html'],
      options: {
        parser: 'html'
      }
    },
    {
      files: ['*.css'],
      options: {
        parser: 'css'
      }
    },
    {
      files: ['*.less'],
      options: {
        parser: 'less'
      }
    }
  ]
}
