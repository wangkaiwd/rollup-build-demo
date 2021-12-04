import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'lib/index.js',
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
  plugins: [resolve(), commonjs(), babel({ babelHelpers: 'bundled' })]
};