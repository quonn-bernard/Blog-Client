var EventEmitter = require('events')
 
var ee = new EventEmitter()
ee.on('notification', function (text) {
  console.log(text)
})
// ee.emit('message', 'hello world')

export default ee;