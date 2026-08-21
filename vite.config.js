import { defineConfig } from 'vite';

// relative base so the build runs from any subpath,
// e.g. embedded as an iframe on the tutorial page
export default defineConfig({
    base: './'
});
