var path = require('path');

	module.exports = {
	  mode: 'development',
	  entry: './main.js',
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'foo.bundle.js'
	  },
  	module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        query: {
	          presets: ["es2015","react"]
	        }
	      }
	    },
	    {
		        test: /\.css$/,
		        use: [ 'style-loader', 'css-loader' ]
		    },
		     {
	        test: /\.(png|jpg|gif)$/,
	        use: [
	          {
	            loader: 'url-loader',
	            options: {
	              limit: 8192
	            }
	          }
	        ]
	    }
	  ]
	},
	devServer: {
	  contentBase: path.join(__dirname, "dist"),
	  compress: true,
<<<<<<< HEAD
	  port: 9001,
=======
	  port: 3000,
>>>>>>> f40011897c6ad6d4da9474ed14a21b137b0cad1b
	  inline:true
	}
};