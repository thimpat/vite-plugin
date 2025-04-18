import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import cssSourcemap from 'vite-plugin-css-sourcemap';
import path from 'path';

export default defineConfig({
    plugins: [
        vue(),
        cssSourcemap({
            enabled: true,
            extensions: ['.scss', '.css', '.less'],
        })
    ],
    root: path.resolve(__dirname, "web/src"),
    build: {
        minify: false,
        outDir: path.resolve(__dirname, "web/dist"),
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: ["web/index.html", "web/index2.html"],
            output: {
                entryFileNames: "[name].js",
                chunkFileNames: "js/[name].js",
                assetFileNames: "assets/[name].[ext]",
            },
        },
    },
})