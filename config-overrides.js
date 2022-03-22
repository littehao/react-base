const { resolve } = require('path')

module.exports  =  function override(config, env){
    config.resolve.alias = {
        ...config.resolve.alias,
        '@':resolve(__dirname, 'src')
    }
    return config;
}