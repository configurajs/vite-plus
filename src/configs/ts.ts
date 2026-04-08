import type { LintConfigContribution, OxlintOverride } from '../types'

export interface CreateTsConfigOptions {
  exts?: string[]
}

export function createTsConfig(options: CreateTsConfigOptions = {}): LintConfigContribution {
  const { exts = [] } = options

  const files = ['**/*.?([cm])ts', '**/*.?([cm])tsx', ...exts.map((ext) => `**/*.${ext}`)]

  const tsOverride: OxlintOverride = {
    files,
    rules: {
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-redeclare': 'off',
      'no-undef': 'off',

      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',

      'typescript/await-thenable': 'error',
      'typescript/no-array-constructor': 'error',
      'typescript/no-array-delete': 'error',
      'typescript/no-base-to-string': 'error',
      'typescript/no-duplicate-enum-values': 'error',
      'typescript/no-duplicate-type-constituents': 'error',
      'typescript/no-extra-non-null-assertion': 'error',
      'typescript/no-floating-promises': 'error',
      'typescript/no-for-in-array': 'error',
      'typescript/no-implied-eval': 'error',
      'typescript/no-meaningless-void-operator': 'error',
      'typescript/no-misused-new': 'error',
      'typescript/no-namespace': 'error',
      'typescript/no-non-null-asserted-optional-chain': 'error',
      'typescript/no-redundant-type-constituents': 'error',
      'typescript/no-require-imports': 'error',
      'typescript/no-this-alias': 'error',
      'typescript/no-unnecessary-parameter-property-assignment': 'error',
      'typescript/no-unnecessary-type-constraint': 'error',
      'typescript/no-unsafe-declaration-merging': 'error',
      'typescript/no-unsafe-function-type': 'error',
      'typescript/no-unsafe-unary-minus': 'error',
      'typescript/no-useless-empty-export': 'error',
      'typescript/no-wrapper-object-types': 'error',
      'typescript/prefer-as-const': 'error',
      'typescript/prefer-namespace-keyword': 'error',
      'typescript/prefer-string-starts-ends-with': 'error',
      'typescript/restrict-template-expressions': 'error',
      'typescript/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
      'typescript/no-non-null-asserted-nullish-coalescing': 'error',
      'typescript/no-useless-constructor': 'error',
      'typescript/prefer-literal-enum-member': 'error',
      'typescript/unified-signatures': 'error',
      'typescript/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true,
        },
      ],
      'typescript/no-unused-vars': [
        'error',
        {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all',
        },
      ],
    },
  }

  return {
    plugins: ['typescript'],
    overrides: [tsOverride],
  }
}
