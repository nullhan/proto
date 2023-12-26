module.exports = {
  /**
   * @see 更多规则配置 https://prettier.io/docs/en/options.html
   */
  //  "$schema": "https://json.schemastore.org/prettierrc",
  endOfLine: 'auto', // 指定文件结尾换行符
  eslintIntegration: true,  // 使用eslint代码格式校验
  insertSpaceBeforeFunctionParenthesis: true, // 函数名和括号之间加个空格
  jsxBracketSameLine: true, // 在jsx中把'>' 是否单独放一行
  jsxSingleQuote: true, // 在jsx中使用单引号而不是双引号
  printWidth: 100, // 单行显示宽度
  semi: false, // 是否在每行末尾添加分号
  singleQuote: true, // 使用单引号
  tabSize: 2, // 缩进为2
  useTabs: false, // 使用制表符(tab)缩进
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'always',
  trailingComma: 'es5',
  vueIndentScriptAndStyle: true, // 是否缩进Vue文件中的<script>和<style>标签内的代码
}