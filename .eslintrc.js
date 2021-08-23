module.exports = {
    root: true,
    env: {
      node: true,
      jquery: true
    },
    // 'extends': [
    //   'plugin:vue/essential',
    //   '@vue/standard'
    // ],
    extends: ['plugin:vue/essential'],
    rules: {
      'parser': 'babel-eslint',
      'no-console': 'off',
      'no-debugger': 'off',
      'no-unneeded-ternary': [1, {
        'defaultAssignment': false
        }]
    }
  }