const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development', // Change to 'production' for minification
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Automatically cleans old files in `dist`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            //     {
            //         test: /\.less$/,
            //         use: [
            //             MiniCssExtractPlugin.loader, // Extracts CSS into separate file
            //             'css-loader', // Resolves CSS imports
            //             'less-loader', // Compiles Less to CSS
            //         ],
            //     },
            {
                test: /\.less$/,
                use: [
                    'style-loader',   // Inject styles into DOM
                    'css-loader',     // Convert CSS into JS modules
                    'less-loader',    // Compile LESS into CSS
                ],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]', // Ensures assets are stored properly
                },
            },
        ],
    },
    plugins: [
        // new MiniCssExtractPlugin({ filename: 'css/styles.css' }),
        new HtmlWebpackPlugin({
            template: './index.html', // Uses your existing HTML file
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Ensures it serves built files
        port: 3000,
        hot: true, // Enables live reloading
    },
    resolve: {
        extensions: ['.js']
    },
};
