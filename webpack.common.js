const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    plugins: [
        new StyleLintPlugin({
            configFile: '.stylelintrc',
            context: 'src',
            files: '**/*.scss',
            failOnError: true,
            quiet: false,
        }),
    ],
};
