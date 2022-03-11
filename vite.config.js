import { defineconfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineconfig({
    base: '/deploying-vite-project-example/',
    plugins: [vue()]
})
