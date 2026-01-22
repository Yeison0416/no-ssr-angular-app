const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    // Placeholder for future production-specific configurations that is not already supported by angular cli configuration
});
