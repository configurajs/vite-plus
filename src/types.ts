import type { OxlintConfig } from 'oxlint'

export type { DummyRule, OxlintConfig, OxlintOverride } from 'oxlint'

export type LintConfigContribution = Pick<
  OxlintConfig,
  'plugins' | 'rules' | 'overrides' | 'globals' | 'env' | 'settings'
>
