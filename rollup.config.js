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
  ]
};