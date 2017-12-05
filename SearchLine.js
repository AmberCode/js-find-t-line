
const fs = require('fs');
const sr = fs.createReadStream('C:\\temp\\32_20171205001\\32_20171205001.TSYSO');

var perfy = require('perfy');

perfy.start('loop-stuff');

const lineReader = require('readline').createInterface({
    input: sr
});

var i = 0;

lineReader.on('line', function(line){

    i++;
    console.log(i);

    if (line[0] === 'T'){
        console.log(i);
        console.log(line);
    }
});

lineReader.on('close', function(){
    console.log(perfy.end('loop-stuff').summary);
});

