import { fileURLToPath, URL } from 'node:url'
import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(), '')
  // mode = env.NODE_ENV || mode

  return {
    // base: './',
    // 适配github pages
    base: 'proto',
    mode: mode,
    build: {
      target: 'esnext', // 将目标环境设置为 esnext
      emptyOutDir: true,
      outDir: 'dist',
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: ['production'].includes(mode),
          drop_debugger: true,
          pure_funcs: ['console.log'],
        },
        format: {
          comments: false,
        },
      },
      assetsDir: 'static',
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        dirs: [
          'src/utils/**',
          'src/components',
          'src/router',
          'src/types/service',
          'src/server',
          'src/server/api',
          'src/stores',
        ],
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
          }),
        ],
        eslintrc: {
          enabled: true,
          filepath: 'src/plugin/.eslintrc-auto-import.json',
        },
        dts: 'src/types/auto-imports.d.ts',
        vueTemplate: true,
      }),
      AutoImport({
        imports: [
          {
            from: 'lodash-es',
            imports: [['default', 'lodash']],
          },
          {
            from: 'dayjs',
            imports: [['default', 'dayjs']],
          },
        ],
        dts: false,
      }),
      Components({
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
          }),
        ],
        dirs: ['src/components'],
        // extensions: ['vue', 'tsx'],
        directives: true,
        dts: 'src/types/components.d.ts',
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'customIcon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 8009,
      proxy: {
        '/api': {
          // secure: false, // 如果是https接口，需要配置这个参数
          // target: 'http://', // 接口的域名
          target: 'https://hanx.com/', // 测试环境
          headers: {
            Cookie: 'x_host_key_access_',
          },
          secure: false, // 如果是https接口，需要配置这个参数
          changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
          // rewrite: (path) => path.replace(/^\/api/, '/'),
        },
      },
    },
  }
})