const path = require('path');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDir = path.resolve(__dirname, 'wwwroot/dist/');

module.exports = {
    entry: {
        react: [
            './scripts/react.tsx',
            './scripts/react2.jsx'
        ],
        typescript: [
            './scripts/typescript.ts'
        ],
        "material-ui": [
            './scripts/material-ui.jsx'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: outputDir,
        publicPath: "/assets/",
    },
    devtool: "source-map",
    devServer: {
        hot: true,
    },
    resolve: {
        modules: ["client", "node_modules"],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(outputDir),
        new CheckerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: [
                {
                    loader: 'awesome-typescript-loader',
                    options: {
                        useCache: true,
                        useBabel: true,
                        babelOptions: {
                            babelrc: true,
                            plugins: ['react-hot-loader/babel'],
                        }
                    }
                }
                ]
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        '@material-ui/core': 'window["material-ui"]', 
    }
};