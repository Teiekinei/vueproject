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
  increment: ({ commits }) => {
    if (commits.some(c => c.notes && c.notes.some(n => n.title === 'BREAKING CHANGE'))) {
      return 'major';
    }
    if (commits.some(c => c.type === 'feat')) {
      return 'minor';
    }
    if (commits.some(c => c.type === 'fix' || c.type === 'perf')) {
      return 'patch';
    }

    // chore、docs、style、test 等不升版且不跳版本選擇
    return null;
  },
  git: {
    commitMessage: 'chore: Release v${version}',
    tagName: 'v${version}',
    push: true,
    requireCleanWorkingDir: true,
    requireBranch: 'main' // 或你預設的主要分支名稱，如 master
  },
  github: {
    release: true
  },
  npm: {
    publish: false
  },
  hooks: {
    // 釋出前確保遠端同步，避免推不上去
    'before:git:push': 'git pull --rebase'
  },
  // 這是重點，當無版本升級時跳過整個釋出步驟（避免跳選擇）
  skip: {
    changelog: false, // 你想要更新 changelog 就留 false
    commit: false,
    tag: false,
    push: false,
    npm: true,
    github: false
  }
};
