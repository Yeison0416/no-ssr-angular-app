const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    // Placeholder for future development-specific configurations that is not already supported by the angular cli configuration
});
