import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'lib/index.js',
  output: [
    {
      file: 'dist/bundle.es.js',
      format: 'es'
    },
    {
      file: 'dist/bundle.umd.js',
      name: 'name',
      format: 'umd'
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
  plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
};