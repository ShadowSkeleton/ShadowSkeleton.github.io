import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/',  // Keep this as '/' because your repo is a user site
    build: {
        // Use esbuild (default, faster than terser)
        minify: 'esbuild',
        // Optimize chunk splitting for better caching
        rollupOptions: {
            output: {
                manualChunks: {
                    // Separate vendor chunks for better caching
                    'react-vendor': ['react', 'react-dom'],
                    'animation-vendor': ['framer-motion'],
                    'icons-vendor': ['lucide-react'],
                },
            },
        },
        // Improve build performance
        chunkSizeWarningLimit: 1000,
        // Enable source maps only in production for debugging (disable for smaller builds)
        sourcemap: false,
    },
    // Optimize dependencies
    optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
    },
})
