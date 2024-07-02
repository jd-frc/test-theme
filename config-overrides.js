module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
        "vm": require.resolve("vm-browserify"),
        process: require.resolve('process/browser'),
        ...config.resolve.fallback,
    };

    config.ignoreWarnings = [
      function (warning) {
        return warning.message.includes("Failed to parse source map");
      },
    ];

    config.plugins = (config.plugins || []).concat([
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ]);
    
    return config;
}
const webpack = require('webpack');