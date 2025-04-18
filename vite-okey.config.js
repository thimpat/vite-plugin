import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssSourcemap from 'vite-plugin-css-sourcemap';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), cssSourcemap({
        enabled: true,
        extensions: ['.scss', '.css', '.less'],
    })],
    build: {
        sourcemap: true,
        rollupOptions: {
            input: "index.html",
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "js/[name].[hash].js",
                assetFileNames: "assets/[name].[hash].[ext]",
            },
        },
    },
})