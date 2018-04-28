
// 写入流

var fs = require('fs')

var data = '不写不写不写不写不写不写不写不写不写就不写'

var writeStream = fs.createWriteStream('../text.txt')

// write -> end -> finish || error

// 使用utf8写入数据
writeStream.write(data, 'UTF8');

// 标记结束
writeStream.end()

// 完成
writeStream.on('finish', function() {
  console.log('写完');
})

writeStream.on('error', function(err) {
  console.log('写错了', err);
})

console.log('执行完了');