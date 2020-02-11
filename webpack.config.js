var webpack = require("webpack");

module.exports = {
		mode: "production",
		entry: "/Users/shervin/Desktop/mern-test/src/app",
		output: {
			path:"/Users/shervin/Desktop/mern-test/src/server/public",
			filename: "bundle.js",
			publicPath: "dist",
		},
		devServer:{
			inline: true,
			contentBase:'./',
			port: 3000,
		},



module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    }
  ]
}



}
