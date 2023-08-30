module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard'],
  rules: {
    'no-labels': ['error', { allowLoop: true }],
    'max-len': ['error',
      {
        code: 120,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreTemplateLiterals: false,
        ignoreStrings: true
      }],
    'arrow-parens': ['error', 'as-needed'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'generator-star-spacing': 'off',
    curly: ['error', 'all'],
    'comma-dangle': ['error', 'only-multiline'],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 1
      }
    ]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    },
    {
      files: ['**/*.spec.js', '**/*.test.js'],
      env: {
        jest: true
      }
    }
  ]
}
