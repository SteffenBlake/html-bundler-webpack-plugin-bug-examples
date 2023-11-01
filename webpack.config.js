import * as path from 'path';

import HtmlBundlerPlugin from 'html-bundler-webpack-plugin';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    plugins: [
        new HtmlBundlerPlugin({
            entry: 'src/views',
            js: {
                filename: 'scripts/[name].[contenthash:8].js',
            },
            css: {
                filename: 'styles/[name].[contenthash:8].css',
            },
            preprocessor: 'ejs',
            minify: 'auto',
            integrity: {
                enabled: true,
                hashFunctions: 'sha384',
            },

        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        // publicPath: '/test',
        crossOriginLoading: "anonymous",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
        ],
    },
};