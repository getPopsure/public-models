// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [typescript(), image(), json()],
};
