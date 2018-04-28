
// 链式流 (一般用于管道流)


// second example: 解压

var fs = require('fs');
var zlib = require('zlib');

// text.txt.gz -> text2.txt

// 读取 -> 解压 -> 写入

fs.createReadStream('../text.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('../text2.txt'));

console.log('end');
