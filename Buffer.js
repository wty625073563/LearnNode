

//  Buffer  已暴露的全局对象

var buf1 = Buffer.from('需要编码的对象', 'utf8')
var buf2 = Buffer.from('asdsadsadsadsa', 'ascii')

console.log(buf1, buf1.toString())

console.log(buf2, buf2.toString());
