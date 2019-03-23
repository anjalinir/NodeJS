const fs = require('fs');

const fileName = __dirname + '/test.txt';

fs.readFile(fileName, (err, data) => {
    if(err){
        console.error(err);
        return;
    }

    console.log(data.toString());
})