import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages repo: Marie-Joy.github.io (user-site repo), so base is root.
// If deployed to a different repository, change base to '/repository-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
