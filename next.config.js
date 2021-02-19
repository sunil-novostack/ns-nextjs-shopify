require('dotenv').config();

const webpack = require('webpack');

const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);
const mongoUri = JSON.stringify(process.env.SHOPIFY_MONGO_URI);


module.exports = {
    webpack: (config) =>{
        const env = { 
            API_KEY: apiKey,
            MONGO_URI: mongoUri,
        };
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
    }
}

/*
const options = {distDir: 'build'};

module.exports = options;
*/