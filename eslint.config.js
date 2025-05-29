/**
 * 參考設定:
 *    https://eslint.org/docs/latest/
 *    https://eslint.style/packages/default
 */

import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  vue: true,
  // files: [
  //   '**/*.ts',
  //   '**/*.tsx',
  //   '**/*.vue',
  // ],
  ignores: [
    'eslint.config.js',
  ],
  rules: {
    // 3.2.2 大括號 =======================================================
    // 允許單行塊，例如：if (foo) { bar(); }
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 多行語句必須使用大括號，並保持一致性
    'curly': ['error', 'multi-line'],

    // 'nonblock-statement-body-position': ['error', 'beside', {
    //   overrides: {
    //     if: 'beside',
    //   },
    // }],

    // 3.2.3 縮排 =======================================================
    // 使用 2 個空格作為一個縮進級別
    'style/indent': ['error', 2],
    'vue/html-indent': ['error', 2],

    // 3.2.4 禁止使用尾隨逗號 =======================================================
    // 例如：[1, 2,] 是不允許的，應該是 [1, 2]
    'vue/comma-dangle': ['error', 'never'],
    'style/comma-dangle': ['error', 'never'],

    // 3.2.5 行長度限制 =======================================================
    // 代碼行不得超過 100 個字符
    'vue/max-len': ['error', { code: 300 }],
    'style/max-len': ['error', { code: 300 }],
    // 每行語句限制數量
    'style/max-statements-per-line': ['error', { max: 2 }],

    // 3.2.6 空白 =======================================================
    // 分號結尾後須有空格再接敍述
    'style/semi-spacing': ['error', { after: true, before: false }],
    // 逗號之前不允許有空格，之後必須有一個空格
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'style/comma-spacing': ['error', { before: false, after: true }],
    // 要求物件字面量的花括號內有空格, 例如：{ foo: bar } 而不是 {foo: bar}
    'vue/object-curly-spacing': ['error', 'always'],
    'style/object-curly-spacing': ['error', 'always'],
    // 冒號之前不允許有空格，之後必須有一個空格
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    // 禁止使用多個空格, 不允許忽略行尾註解前的多個空格
    'vue/no-multi-spaces': ['error', { ignoreProperties: false }],
    'style/no-multi-spaces': ['error', { ignoreEOLComments: false }],
    // 禁止行尾有多餘的空格, 不跳過空行，也不忽略註解行
    'style/no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
    // 要求塊級語句和括號之間有空格, 例如：function foo() { return true; }
    'style/space-before-blocks': ['error', 'always'],
    // 禁止函數名和調用它的括號之間有空格, 例如：foo() 是正確的，foo () 是錯誤的
    'style/function-call-spacing': ['error', 'never'],
    // 單行大括號內容前後留一空格
    'vue/block-spacing': ['error', 'always'],
    'style/block-spacing': ['error', 'always'],
    // 要求運算子周圍有空格, 例如：a + b 是正確的，a+b 是錯誤的
    'vue/space-infix-ops': ['error', { int32Hint: false }],
    'style/space-infix-ops': ['error', { int32Hint: false }],

    // 3.2.7 空行  =======================================================
    // 最多允許一個空行
    'style/no-multiple-empty-lines': ['error', { max: 1 }],
    // 特定的語句之間添加空行: if 語句之後、return 語句之前後必須有空行
    'style/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'if', next: 'return' },
      { blankLine: 'always', prev: 'return', next: '*' },
    ],

    // 使用分號於結尾
    'style/semi': ['error', 'always'],
    'style/semi-style': ['error', 'last'],

    // 允許單行html
    'vue/singleline-html-element-content-newline': 'off',

    // 使用警告: console.log
    'vue/no-console': 'error',
    'no-console': 'error',

    // 具有有用轉義的字串文字
    'vue/no-useless-v-bind': ['error', { ignoreStringEscape: true }],
  },
  // 檢查命名大小寫
  typescript: {
    overrides: {
      // 定義 TypeScript 的命名規範，確保代碼風格一致性
      'ts/naming-convention': [
        'error', // 違反規則時顯示錯誤

        // 變數和函數必須使用駝峰式命名法
        // 例如: userData, fetchUserData
        { selector: ['function'], format: ['camelCase'] },

        // 類型相關定義必須使用帕斯卡命名法（首字母大寫）
        // 包括: interface, type, class, enum 等
        // 例如: UserData, ApiResponse, RequestDto
        { selector: ['typeLike'], format: ['PascalCase'] },

        // 列舉成員必須使用全大寫+底線的命名方式
        // 例如: USER_ROLE, ACCESS_TYPE, ERROR_CODE
        { selector: ['enumMember'], format: ['UPPER_CASE'] },
      ],
    },
  },
  // 不檢查單行長度
  javascript: {
    overrides: {
      'style/max-len': 'off',
      'vue/max-len': 'off',
    },
  },
})

