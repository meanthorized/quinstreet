const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development', // Change to 'production' for minification
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs'),
        clean: true, // Automatically cleans old files in `docs`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.module\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]",
                        },
                    },
                    },
                    "less-loader",
                ],
                // @DEBUG
                // include: (resourcePath) => {
                //     console.log("Processing file:", resourcePath); // ✅ Logs every processed file
                //     return true;
                // },
            },
            {
                test: /\.less$/,
                exclude: /\.module\.less$/,  // ✅ Excludes scoped styles from global handling
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
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
        new MiniCssExtractPlugin({
            filename: "styles.css", // ✅ Extract styles for GitHub Pages
        }),
        new HtmlWebpackPlugin({
            template: './index.html', // Uses your existing HTML file
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'docs'), // Ensures it serves built files
        port: 3000,
        hot: true, // Enables live reloading
    },
    resolve: {
        extensions: ['.js']
    },
};
