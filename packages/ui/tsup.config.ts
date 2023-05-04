import { defineConfig, Options } from 'tsup'; 

export default defineConfig((options: Options) => ({ 
    treeshake: true,
    uplisting: true,
    entry: ['./**/*.tsx'],
    format: ['esm'],
    dts: true,
    minify: true,
    clean: true,
    external: ["react"],
    ...options,
}))