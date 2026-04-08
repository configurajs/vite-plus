import type { LintConfigContribution, LintOverride } from '../types'

export function createVitestConfig(): LintConfigContribution {
  const vitestOverride: LintOverride = {
    files: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    rules: {
      'vitest/no-commented-out-tests': 'warn',
      'vitest/no-identical-title': 'error',
      'vitest/no-import-node-test': 'warn',
      'vitest/require-local-test-context-for-concurrent-snapshots': 'warn',
      'vitest/valid-describe-callback': 'error',
      'vitest/valid-expect': 'error',
      'vitest/valid-title': 'error',
    },
  }

  return {
    plugins: ['vitest'],
    overrides: [vitestOverride],
  }
}
