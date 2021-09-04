module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 禁止在条件表达式中使用赋值语句
    'no-cond-assign': 0,
    // 禁止修改传入函数中的参数
    'no-param-reassign': 0,
    // 引入
    'import/prefer-default-export': 0,
    // 禁止使用迭代器和生成器
    'no-restricted-syntax': 0,
    // 不能有continue
    'no-continue': 0,
    // 使用解构赋值
    'prefer-destructuring': 0,
    // 禁止使用++ --
    'no-plusplus': 0,
    // 不允许嵌套三元表达式
    'no-nested-ternary': 0,
    // paseInt必须加进制数
    radix: 0,
    // 行最大长度限制
    'max-len': 0,
    // 禁止使用乘除混合
    'no-mixed-operators': 0,
    // 箭头函数中必须有返回值
    'array-callback-return': 0,
    // 应用必须来自dependencies
    'import/no-extraneous-dependencies': 0,
    // promise。reject必须是error类型
    'prefer-promise-reject-errors': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'no-prototype-builtins': 0,
    'no-bitwise': 0,
    'no-unused-expressions': 0,
    camelcase: 0,
  },
};
