// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');


const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    entry: {
        indexPage: './src/index.js',
      },

    output: {
        filename: 'js/[name].bundle.js',
        publicPath: './'
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/templates/indexPage.html",
            chunks: ["indexPage"],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      modules: {
                        localIdentName: "[local]",
                      },
                    },
                  },
                  {
                    loader: "sass-loader",
                    options: {
                      sassOptions: {
                        modules: true,
                        // localIdentName: "[name]",
                      },
                    },
                  },
                ],
              },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());

    } else {
        config.mode = 'development';
    }
    return config;
};
