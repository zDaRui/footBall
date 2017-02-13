/**
 * Created by 大瑞 on 2017/2/9.
 */
var ET=require('extract-text-webpack-plugin');
module.exports = {
    //入口配置
    entry: __dirname+'/src/scripts/app.js',
    //配置source-map
    devtool: "source-map",
    devServer: {
        contentBase: __dirname+'/prd',
        /* colors: true,//*/
        port:"8080",
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        host:'localhost'
    },
    //输出配置
    output: {
        path: __dirname+'/prd',
        filename: './boudle.js'
    },
    //模块配置
    module: {
        //加载器
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                //loader: 'style-loader!css-loader!sass-loader'
                loader:ET.extract({fallbackLoader:'style-loader',loader:'css-loader!sass-loader'})
            }
        ]
    },
   /* extranal:[

    ],*/
    plugins:[
        new ET('boudle.css')
    ]
}

