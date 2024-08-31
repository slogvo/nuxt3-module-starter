// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
    features: {
        // Rules for module authors
        tooling: true,
        // Rules for formatting
        stylistic: false,
    },
    dirs: {
        src: ['./playground'],
    },
}).append({
    rules: {
        '@stylistic/quotes': 'off', // Allow double quotes
        '@stylistic/semi': 'off', // Allow semicolons
    },
})
