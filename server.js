
// 创建服务器
var http = require('http');

http.createServer(function (request, response) {

  // 发送HTTP头部
  // HTTP 状态值: 200: ok
  // 内容类型: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // 发送响应数据
  response.end('你好啊啊啊node');

}).listen(8080);


console.log('run');
