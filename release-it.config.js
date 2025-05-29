module.exports = {
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
        types: [
          { type: 'feat', section: '✨ Features | 新功能' },
          { type: 'fix', section: '🐛 Bug Fixes | Bug 修復' },
          { type: 'perf', section: '⚡ Performance Improvements | 性能優化' },
          { type: 'chore', section: '🎫 Chores | 其他更新' },
          { type: 'docs', section: '📝 Documentation | 文檔' },
          { type: 'style', section: '💄 Styles | 風格' },
          { type: 'refactor', section: '♻ Code Refactoring | 代碼重構' },
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

  // 根據 commit 自動決定版本號，否則 null（不升版、不釋出）
  increment: ({ commits }) => {
    if (commits.some(c => c.notes?.some(n => n.title === 'BREAKING CHANGE'))) { return 'major'; }
    if (commits.some(c => c.type === 'feat')) { return 'minor'; }
    if (commits.some(c => c.type === 'fix' || c.type === 'perf')) { return 'patch'; }

    return null; // chore、docs 等不升版
  },

  git: {
    commitMessage: 'chore: Release v${version}',
    tagName: 'v${version}',
    push: true,
    requireCleanWorkingDir: true,
    requireBranch: 'main'
  },

  github: {
    release: true
  },

  npm: {
    publish: false
  },

  hooks: {
    'before:git:push': 'git pull --rebase'
  },

  // 自動跳過版本選擇，如果 increment 回傳 null，就整個跳過 release
  // release-it 本身會自動略過（所以不需要多寫 skip）
  // 若你還是想保險設定，可以加這個（不會造成問題）
  skip: {
    changelog: false,
    commit: false,
    tag: false,
    push: false,
    npm: true,
    github: false
  }
};
