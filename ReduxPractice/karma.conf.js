var webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
    config.set({
        browsers: ['chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.jsx', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/foundation-sites/dist/foundation.min.js'],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-mocha',
            'karma-mocha-reporter'
        ],
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};