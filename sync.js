const fs = require('fs');

const fileName = __dirname + '/test.txt';
const data = fs.readFileSync(fileName);

console.log(data.toString());
