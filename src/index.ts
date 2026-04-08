import {
  createIgnoresConfig,
  createJsConfig,
  createReactConfig,
  createTsConfig,
  createVitestConfig,
  createVueConfig,
  type CreateVueConfigOptions,
} from './configs'
import type {
  LintConfig,
  LintConfigContribution,
  LintOverride,
  RuleValue,
} from './types'
import { mergeContributions } from './utils'

export type LintOptionsVue = Partial<Pick<CreateVueConfigOptions, 'version'>>

export type { LintConfig, LintOverride, RuleValue } from './types'

export type { CreateVueConfigOptions } from './configs'

export interface LintOptions {
  /**
   * Enable TypeScript support
   * @default true
   */
  ts?: boolean
  /**
   * Enable Vue support, version 3 by default
   * @default true
   */
  vue?: boolean | LintOptionsVue
  /**
   * Enable React support
   * @default false
   */
  react?: boolean
  /**
   * Enable Vitest support
   * @default true
   */
  vitest?: boolean
  /**
   * Custom rules
   */
  rules?: Record<string, RuleValue>
  /**
   * Ignore file patterns
   */
  ignores?: string[]
  /**
   * Additional overrides
   */
  overrides?: LintOverride[]
}

export function lint(options: LintOptions = {}): LintConfig {
  const {
    ts = true,
    vue = true,
    react = false,
    vitest = true,
    ignores = [],
    rules = {},
    overrides = [],
  } = options

  const contributions: LintConfigContribution[] = [createJsConfig()]

  if (ts) {
    contributions.push(createTsConfig({ exts: vue ? ['vue'] : [] }))
  }

  if (vue) {
    contributions.push(
      createVueConfig({ version: vue === true ? 3 : (vue.version ?? 3) }),
    )
  }

  if (react) {
    contributions.push(createReactConfig())
  }

  if (vitest) {
    contributions.push(createVitestConfig())
  }

  contributions.push({ rules })

  const config = mergeContributions(...contributions)

  config.ignorePatterns = createIgnoresConfig({ ignores })

  if (ts) {
    config.options = {
      typeAware: true,
      typeCheck: true,
    }
  }

  config.overrides = [...(config.overrides ?? []), ...overrides]

  return config
}

export function fmt() {
  return {
    semi: false,
    printWidth: 120,
    singleQuote: true,
    sortImports: true,
    sortTailwindcss: true,
  }
}
