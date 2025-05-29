module.exports = {
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular', // 遵循 Angular commit message 格式
      infile: 'CHANGELOG.md' // 變更記錄檔案
    }
  },
  git: {
    // 用雙反斜線轉義 $，避免編輯器警告，同時 release-it 會正常解析
    commitMessage: 'chore(release): v\\${version}',
    tagName: 'v\\${version}',
    push: true
  },
  github: {
    release: true // 自動產生 GitHub Release
  },
  npm: {
    publish: false // 若不發 npm 套件設 false
  }
};
