const { VueLoaderPlugin } = require('vue-loader');
module.exports={
    entry:'./src/app/index.js',
    output:{
        path: __dirname+'/src/public/js',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
            },
            { 
                test: /\.css$/, 
                use: 'css-loader'
             },
            
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
};