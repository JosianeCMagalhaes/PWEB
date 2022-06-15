var eventos = require('events');
var EmissorEventos = eventos.EventEmitter;
var ee = new EmissorEventos();
ee.on('dados',function(fecha){
	console.log(fecha);
});
setInterval(funtion(){
	ee.emit('dados',Date.now());
},500);