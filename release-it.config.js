module.exports = {
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
        types: [
          { type: 'feat', section: '✨ Features | 新功能' },
          { type: 'fix', section: '🐛 Bug Fixes | Bug 修復' },
          { type: 'chore', section: '🎫 Chores | 其他更新' },
          { type: 'docs', section: '📝 Documentation | 文檔' },
          { type: 'style', section: '💄 Styles | 風格' },
          { type: 'refactor', section: '♻ Code Refactoring | 代碼重構' },
          { type: 'perf', section: '⚡ Performance Improvements | 性能優化' },
          { type: 'test', section: '✅ Tests | 測試' },
          { type: 'revert', section: '⏪ Reverts | 回退' },
          { type: 'build', section: '👷‍ Build System | 構建' },
          { type: 'ci', section: '🔧 Continuous Integration | CI 配置' },
          { type: 'config', section: '🔨 CONFIG | 配置' }
        ]
      },
      infile: 'CHANGELOG.md',
      ignoreRecommendedBump: true,
      strictSemVer: true
    }
  },
  increment: 'conventionalcommits',
  git: {
    commitMessage: 'chore: Release v${version}',
    tagName: 'v${version}',
    push: true
  },
  github: {
    release: true
  },
  npm: {
    publish: false
  }
};
