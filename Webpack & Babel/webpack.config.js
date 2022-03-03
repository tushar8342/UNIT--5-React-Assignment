const path = require('path')

module.exports = {
    entry : "./src/index.js",                    // where code is comming
    output : {
        path : path.join(__dirname, "build"),      //create a directory name boilt in the place of dist
        filename : "bundle.js"                      //file name inside build   
    },
    module :{
        rules :[
            {
                test: /\.css$/,                                        //for css things
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,                    //for image
                type: 'asset/resource',
              },
        ]

    }
}