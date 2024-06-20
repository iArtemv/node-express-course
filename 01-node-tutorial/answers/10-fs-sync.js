const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './temporary', 'fileA.txt');

if (!fs.existsSync(path.join(__dirname, './temporary'))) {
    fs.mkdirSync(path.join(__dirname, './temporary'));
}

fs.writeFileSync(filePath, 'first\n')
fs.appendFileSync(filePath, 'second\n');
fs.appendFileSync(filePath, 'third\n');

const fileContent = fs.readFileSync(filePath, 'utf8');

console.log(fileContent);
