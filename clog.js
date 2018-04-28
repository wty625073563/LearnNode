
// 阻塞代码示例(不同于同步)

var fs = require("fs");

var data = fs.readFileSync('text.txt');

console.log(data.toString())
console.log('End');