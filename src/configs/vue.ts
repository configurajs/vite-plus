import type { LintConfigContribution } from '../types'

export interface CreateVueConfigOptions {
  version?: 2 | 3
}

export function createVueConfig(options: CreateVueConfigOptions = {}): LintConfigContribution {
  const { version = 3 } = options

  return {
    plugins: ['vue'],
    rules: {
      'vue/no-multiple-slot-args': 'warn',
      ...(version === 2
        ? { 'vue/no-deprecated-destroyed-lifecycle': 'off' }
        : {}),
    },
    globals: {
      computed: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      defineProps: 'readonly',
      onMounted: 'readonly',
      onUnmounted: 'readonly',
      reactive: 'readonly',
      ref: 'readonly',
      shallowReactive: 'readonly',
      shallowRef: 'readonly',
      toRef: 'readonly',
      toRefs: 'readonly',
      watch: 'readonly',
      watchEffect: 'readonly',
    },
  }
}
