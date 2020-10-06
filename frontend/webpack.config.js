const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devUrl = 'http://localhost:8080'

module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new MiniCssExtractPlugin({ 
        //filename: 'styles.css'
        filename: isProduction ? '../../src/main/resources/static/styles/styles.css' : 'styles.css'
    })

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: isProduction ? '../../src/main/resources/static/built/bundle.js' : 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            //contentBase: path.join(__dirname, '../src/main/resources/static/built'),
            historyApiFallback: true,
            proxy: [{
                context: ['/insert*', '/get*', '/delete*', '/update*'],
                target: devUrl,
            }]
        }
    }
}


