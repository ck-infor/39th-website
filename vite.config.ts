import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type UserConfig } from 'vite';

const dev = process.env.NODE_ENV === 'development';

const config: UserConfig = {
  plugins: [
    tailwindcss(),
    sveltekit({
      compilerOptions: {
        runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
      },
      adapter: adapter({
        pages: 'build',
        assets: 'build',
        fallback: null
      }),
      paths: {
        base: dev ? '' : '/39th-website'
      }
    })
  ]
};

export default defineConfig(config);
