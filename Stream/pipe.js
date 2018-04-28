
// 管道流
var fs = require('fs');

// create readerStream
var readerStream = fs.createReadStream('../text.txt')

// create writeStream
var writeStream = fs.createWriteStream('../output.txt')

// 管道读写操作
// 读写text的内容  ->  写入ouput中

readerStream.pipe(writeStream);

console.log('end');