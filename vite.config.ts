import { defineConfig } from 'vite'
import { default as vue } from '@vitejs/plugin-vue'

export default defineConfig(async () => {
  return {
    plugins: [vue()],
  };
});
