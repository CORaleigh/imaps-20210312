const ArcGISPlugin = require('@arcgis/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

module.exports = function build(env, arg) {
  const config = {
    entry: {
      index: ['./src/css/index.css', '@babel/polyfill', './src/index.ts'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      chunkFilename: 'chunks/[id].js',
      publicPath: ''
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3001,
      writeToDisk: true,
      open: true
    },
    module: {  
      rules: [     
        {
          test: /\.(ts|js|jsx|tsx)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },        
        {
          test: /\.html$/,
          type: 'asset/resource',
          exclude: /node_modules/,
        },
        {
          test: /\.(ttf|eot|svg|png|jpg|gif|ico|wsv|otf|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        },
  
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                },
                
            },
        ],
        }, {
          test: /\.css$/,
          include: [path.resolve(__dirname, 'src'),],
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            }   
          ],
        },
      ],
    },
    optimization: {
      minimize: arg.mode === 'production',
      splitChunks: { minChunks: Infinity, chunks: 'all' },
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
        new CssMinimizerPlugin()
      ],
      runtimeChunk: {
        name: 'runtime',
      },
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
        chunkFilename: '[id].css',
      }),
  
      new ArcGISPlugin({
        useDefaultAssetLoaders: false,
        features: {
          "3d": false,
          userDefinedExcludes: [
            "@arcgis/core/layers/BingMapsLayer",
            "@arcgis/core/layers/CSVLayer",
            "@arcgis/core/layers/GeoRSSLayer",
            "@arcgis/core/layers/ImageryLayer",
            "@arcgis/core/layers/KMLLayer",
            "@arcgis/core/layers/MapImageLayer",
            "@arcgis/core/layers/OpenStreetMapLayer",
            "@arcgis/core/layers/StreamLayer",
            "@arcgis/core/layers/WMSLayer",
            "@arcgis/core/layers/WMTSLayer",
            "@arcgis/core/layers/WebTileLayer",
            "@arcgis/core/form/ExpressionInfo",      
            "@arcgis/core/form/FormTemplate",      
            "@arcgis/core/form/elements/FieldElement",     
            "@arcgis/core/form/elements/GroupElement",      
            "@arcgis/core/form/inputs/DateTimePickerInput",                              
            "@arcgis/core/form/inputs/Input",                              
            "@arcgis/core/form/inputs/TextAreaInput",                              
            "@arcgis/core/form/inputs/TextBoxInput",                              
            "@arcgis/core/form/inputs/TextInput",
            "@arcgis/core/tasks/ClosestFacilityTask",
            "@arcgis/core/tasks/FindTask",
            "@arcgis/core/tasks/ImageIdentifyTask",
            "@arcgis/core/tasks/ImageServiceIdentifyTask",
            "@arcgis/core/tasks/RouteTask",
            "@arcgis/core/tasks/ServiceAreaTask",


          ]          
        }
   }),

      new HtmlWebPackPlugin({
        title: 'iMAPS',
        template: './src/index.ejs',
        filename: './index.html',
        favicon: './src/assets/favicon.ico',
        chunksSortMode: 'none',
        inlineSource: '.(css)$',
        mode: arg.mode,
      }),

      new HtmlWebPackPlugin({
        template: './src/oauth-callback.html',
        filename: './oauth-callback.html',
        chunksSortMode: 'none',
        inject: false,
      }),
      new CopyPlugin({
        patterns: [
          { from: "node_modules/@esri/calcite-components/dist/calcite", to: "calcite" },
        ],
      }),
    ],
    resolve: {
          modules: [
            path.resolve(__dirname, '/src'),
            path.resolve(__dirname, 'node_modules/')
          ],
      extensions: ['.ts', '.tsx', '.js', '.scss', '.css', '.jsx'],
    },
  };

  if (arg.mode === 'production') {
    config.devtool = 'source-map';
    config.plugins.push(
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      }),
    );
  }

  return config;
};
