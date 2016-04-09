var path = require('path');
module.exports={
context: _dirname,
  entry:path.join('_dirname', 'public', 'entry.js'),
  output:{
    path: path.join('_dirname', 'dist'),
    filename: 'bundle.js'
  }
}
