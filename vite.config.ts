import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode } : {mode:any}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return defineConfig({
    plugins: [
      vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['vue3-ytframe'].includes(tag),
        }
      }
    })],
    server: {
      port: parseInt(process.env.VITE_PORT),
      hmr: {
        host: 'localhost'
    }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      }
    }
  })
}

// https://vitejs.dev/config/

