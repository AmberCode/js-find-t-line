
const fs = require('fs');
const sr = fs.createReadStream('C:\\temp\\32_20171205001\\32_20171205001.TSYSO');
var perfy = require('perfy');

perfy.start('loop-stuff');

const lineReader = require('readline').createInterface({
    input: sr
});


lineReader.on('line', function(line){
    if (line[0] === 'T'){
        console.log(line);
    }
});

lineReader.on('close', function(){
    console.log(perfy.end('loop-stuff').summary);
});

