const path = require('path');

const file = path.join('node-express-course', '01-node-tutorial','answers','09-path-module.js');

const abs = path.resolve(__dirname, '09-path-module.js');

console.log(path.join(path.sep, 'Users', 'JohnSmith', 'node-express-course', '01-node-tutorial', 'answers'));
