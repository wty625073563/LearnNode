
// 链式流 (一般用于管道流)


// first example: 压缩文件

var fs = require('fs');
var zlib = require('zlib');

// text.txt -> text.txt.gz

// 读取 -> 压缩 -> 写入
fs.createReadStream('../text.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('../text.txt.gz'));


console.log('end');