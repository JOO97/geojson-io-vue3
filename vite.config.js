import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({customElement: true}),  typescript({
    declaration: true,  
    declarationDir: 'dist/types',  
  })],
  build:{
    lib: {
      entry: 'src/main.ts',
      name: 'MyComponent',
      fileName: (format) => `my-component.${format}.js`,
    }
  },
  rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
})
