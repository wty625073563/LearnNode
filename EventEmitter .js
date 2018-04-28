
// 引入event模块

var events = require('events')

// 创建eventEmitter 实例对象
var eventEmitter = new events.EventEmitter()


var connectHandler = function connected() {
  console.log('触发data1');

  eventEmitter.emit('data2');
}

eventEmitter.on('data1', connectHandler)

eventEmitter.on('data2', function() {
  console.log('end');
})

console.log('1');

setTimeout(() => {
  eventEmitter.emit('data1')
}, 50);

console.log('2');