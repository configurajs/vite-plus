import type { AllowWarnDeny, DummyRule, OxlintConfig, OxlintOverride, RuleCategories } from 'oxlint'

export type Severity = AllowWarnDeny

export type RuleValue = DummyRule

export type Plugin = NonNullable<OxlintConfig['plugins']>[number]

export type Category = keyof RuleCategories

export type LintConfig = OxlintConfig

export type LintOverride = OxlintOverride

export type LintConfigContribution = Pick<
  OxlintConfig,
  'plugins' | 'categories' | 'rules' | 'overrides' | 'globals' | 'env' | 'settings'
>
