// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#3048a6',
        '@font-size-base': '16px',
        '@text-color': 'rgba(38, 38, 38, 0.8)',
        '@font-family': 'Inter, sans-serif',
      },
    },
  }),
);
