const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../content', 'big.txt');
console.log(filePath);

const options = {
    encoding: 'utf8',
    highWaterMark: 300
};

const readStream = fs.createReadStream(filePath, options);

let chunkCounter = 0;

readStream.on('data', (chunk)=>{
    chunkCounter++;
    console.log(`Received chunk ${chunkCounter}: ${chunk}`);
});

readStream.on('end', ()=>{
    console.log(`End. Total chunks received: ${chunkCounter}`);
});

readStream.on('error', (err)=>{
    console.error('Stream error:', err);
});
