/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [ 'babel-preset-expo', { jsxImportSource: 'nativewind' } ],
      'nativewind/babel',
    ],
    plugins: [
      [ 'module-resolver', {
        'root': [ './apps/mobile' ],
        'alias': {
          '@types/react': './node_modules/@types/react',
          '@types/react-dom': './node_modules/@types/react-dom',
          'react': './node_modules/react',
          'react-dom': './node_modules/react-dom',
        }
      } ]
    ],
  };
};
