var path = require('path');

module.exports = {
  mode: 'development',
  entry: `${path.resolve(__dirname, 'babel.build')}/api.js`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cvat.js'
  }
};
