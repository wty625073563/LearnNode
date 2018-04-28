
// 可读流 不可写

var fs = require('fs')

// 设置存储值
var data = ''

// 创建可读流
var readerStream = fs.createReadStream('../text.txt');

// 设置编码
readerStream.setEncoding('UTF8')


// (个人理解)  流操作都是由EventEmitter  驱动, 在外部响应.on()

// 处理流  data -> end(读取完成) || error

readerStream.on('data', function(content) {
  data += content
})

readerStream.on('end', function() {
  console.log(data);
})

readerStream.on('error', function (err) {
  console.log('错误', err);
})


