process.env.NODE_ENV = 'production';
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const webpackProdConfig = require('react-scripts/config/webpack.config.prod');

webpackProdConfig.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: '../TEMP/report.html',
  }),
);

require('react-scripts/scripts/build');
