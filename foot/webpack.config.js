/**
 * Created by ���� on 2017/2/9.
 */
var ET=require('extract-text-webpack-plugin');
module.exports = {
    //�������
    entry: __dirname+'/src/scripts/app.js',
    //����source-map
    devtool: "source-map",
    devServer: {
        contentBase: __dirname+'/prd',
        /* colors: true,//*/
        port:"8080",
        historyApiFallback: true,//����ת
        inline: true,//ʵʱˢ��
        host:'localhost'
    },
    //�������
    output: {
        path: __dirname+'/prd',
        filename: './boudle.js'
    },
    //ģ������
    module: {
        //������
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

