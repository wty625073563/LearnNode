
// 非阻塞
var fs = require("fs")

fs.readFile('text.txt', function(err, data) {
  if(err) {
    console.error(err);
  }

  console.log(data.toString());
})

console.log('end');