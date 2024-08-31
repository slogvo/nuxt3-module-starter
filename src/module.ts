import { defineNuxtModule, createResolver } from '@nuxt/kit'

export const namespace = 'nuxt3-module-start'

// Module options TypeScript interface definition
export interface ModuleOptions {
    prefix?: string
    level?: number
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: namespace,
        configKey: namespace,
    },
    // Default configuration options of the Nuxt module
    defaults: {
        prefix: 'w',
        level: 1,
    },
    setup(_options, _nuxt) {
        const resolver = createResolver(import.meta.url)
        console.log('🚀 ~ setup ~ resolver:', resolver)

        // Example: Resolving a file path within the module
        const filePath = resolver.resolve('runtime/plugin')
        console.log('🚀 ~ setup ~ filePath:', filePath)

        // Add more setup logic as needed
    },
})
