import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                // background: resolve(__dirname, 'src/background.ts'),
                content: resolve(__dirname, 'src/content.ts'),
                // iconImg: resolve(__dirname, 'src/icon.png'),
            },
            output: {
                entryFileNames: 'assets/[name].js',
            },
        },
    },
})
