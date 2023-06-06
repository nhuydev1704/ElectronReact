// webpack.config.js
const path = require('path');

module.exports = {
  // Các cấu hình khác của webpack
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/renderer'),
    },
  },
};
