import type { LintConfigContribution, OxlintConfig } from './types'

export function mergeContributions(
  ...contributions: LintConfigContribution[]
): OxlintConfig {
  const rules: Record<string, any> = {}
  const overrides: OxlintConfig['overrides'] = []
  const globals: OxlintConfig['globals'] = {}
  const env: Record<string, boolean> = {}
  const settings: Record<string, any> = {}
  const plugins: Array<
    OxlintConfig['plugins'] extends (infer T)[] | undefined ? T : never
  > = []

  contributions.forEach((contribution) => {
    contribution.plugins?.forEach((plugin) => plugins.push(plugin))

    Object.assign(rules, contribution.rules)
    Object.assign(globals, contribution.globals)
    Object.assign(env, contribution.env)
    Object.assign(settings, contribution.settings)

    if (contribution.overrides) {
      overrides.push(...contribution.overrides)
    }
  })

  return {
    plugins,
    rules,
    overrides,
    globals,
    env,
    settings,
  }
}
