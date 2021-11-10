module.exports = {
    root: true,
    env: {
      node: true,
      jquery: true
    },
    extends: ['plugin:vue/essential'],
    rules: {
      'vue/no-parsing-error': false,
      'parser': 'babel-eslint',
      'no-console': 'off',
      'no-debugger': 'off',
      'no-unneeded-ternary': [1, {
        'defaultAssignment': false
      }]
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }