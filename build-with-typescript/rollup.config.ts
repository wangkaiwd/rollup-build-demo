import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'lib/index.ts',
  output: [
    {
      file: 'dist/bundle.es.js',
      format: 'es'
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.iife.js',
      name: 'bundle',
      format: 'iife'
    }
  ],
  // https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
  plugins: [resolve(), commonjs(), typescript({ useTsconfigDeclarationDir: true })]
};