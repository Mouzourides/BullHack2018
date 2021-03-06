var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: 'bundle.js',
        publicPath: 'dist',
        path: path.resolve('dist')
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        inline: true,
        stats: {
            modules: false,
            chunks: false,
            children: false,
            chunkModules: false,
            hash: false,
        },
        proxy: {
            "/bullhack2018/house/all": {
                target: 'http://localhost:8080',
                secure: false,
                changeOrigin: true
            },
            "/bullhack2018/house/add": {
                target: 'http://localhost:8080',
                secure: false,
                changeOrigin: true
            },
            "/bullhack2018/swiper/all": {
                target: 'http://localhost:8080',
                secure: false,
                changeOrigin: true
            },
            "/bullhack2018/swiper/add": {
                target: 'http://localhost:8080',
                secure: false,
                changeOrigin: true
            }
        }

    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    emitErrors: true,
                    failOnHint: true
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            // // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};