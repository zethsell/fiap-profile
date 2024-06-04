// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: "src/",

    alias: {
        "@": "src/",
    },

    ssr: false,
    devtools: {enabled: true},
    css: ["~/assets/scss/app.scss"],
    mdi: {
        cache: false,
        componentName: 'icon',
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    vite: {
        optimizeDeps: {
            exclude: [
                'date-fns'
            ]
        }
    },

    modules: ["@nuxtjs/tailwindcss", 'nuxt-mdi']
})