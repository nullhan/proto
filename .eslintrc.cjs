/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  // 以当前目录为根目录
  root: true,
  // 开发环境
  env: {
    browser: true,
    es6: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  // 扩展
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    // 'plugin:prettier/recommended',
    // '@vue/standard',
    // '@vue/typescript/recommended',
    // 'prettier',
  ],
  globals: {
    dayjs: true,
    lodash: true,
  },
  // 词法解析
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // 规则
  rules: {
    /**
     * 如果要关闭该规则，则设置为 off 或 0
     * 如果打开该规则并触发警告，则设置为 warn 或 1 (不终止程序)
     * 如果打开该规则并提示错误，则设置为 error 或 2 (终止程序)
     * @see Eslint规则地址 https://eslint.bootcss.com/docs/rules/
     * @see vueEslint规则地址 https://eslint.vuejs.org/rules/
     */
    '@typescript-eslint/no-explicit-any': ['off'],
    // 禁用console
    'no-console': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
    // 禁用debugger
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
    // 关闭组件命名规则
    'vue/multi-word-component-names': 'off',
    // 关闭requires使用报错
    '@typescript-eslint/no-var-requires': 0,
    // 当最后一项在新行时，添加末尾逗号
    'comma-dangle': ['error', 'always-multiline'],
  },
  settings: {
    typescript: true,
  },
}
