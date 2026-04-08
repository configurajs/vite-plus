import type { LintConfigContribution, OxlintOverride } from '../types'

export function createVitestConfig(): LintConfigContribution {
  const vitestOverride: OxlintOverride = {
    files: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    rules: {
      'vitest/consistent-each-for': 'error',
      'vitest/hoisted-apis-on-top': 'error',
      'vitest/no-commented-out-tests': 'warn',
      'vitest/no-conditional-tests': 'error',
      'vitest/no-identical-title': 'error',
      'vitest/no-import-node-test': 'warn',
      'vitest/require-awaited-expect-poll': 'error',
      'vitest/require-local-test-context-for-concurrent-snapshots': 'warn',
      'vitest/require-mock-type-parameters': 'error',
      'vitest/valid-describe-callback': 'error',
      'vitest/valid-expect': 'error',
      'vitest/valid-title': 'error',
      'vitest/warn-todo': 'error',
    },
  }

  return {
    plugins: ['vitest'],
    overrides: [vitestOverride],
  }
}
