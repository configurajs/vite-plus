import type { LintConfigContribution } from '../types'

export interface CreateVueConfigOptions {
  version?: 2 | 3
}

export function createVueConfig(options: CreateVueConfigOptions = {}): LintConfigContribution {
  const { version = 3 } = options

  return {
    plugins: ['vue'],
    rules: {
      'vue/no-arrow-functions-in-watch': 'error',
      'vue/no-deprecated-destroyed-lifecycle': version === 2 ? 'off' : 'error',
      'vue/no-export-in-script-setup': 'error',
      'vue/no-lifecycle-after-await': 'error',
      'vue/no-multiple-slot-args': 'warn',
      'vue/no-this-in-before-route-enter': 'error',
      'vue/prefer-import-from-vue': 'error',
      'vue/valid-define-emits': 'error',
      'vue/valid-define-props': 'error',
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
