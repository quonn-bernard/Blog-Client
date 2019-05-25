var EventEmitter = require('events')

//new instance of EventEmitter
var ee = new EventEmitter()

//attaches new emitter instance to 'notification' component
ee.on('notification', function (text) {

  console.log(text)

})

export default ee;