var socket = io();

// .on -> para escuchar
socket.on('connect', function() {
    console.log('Conectado');
});
socket.on('disconnect', function() {
    console.log('Conexión perdida');
});
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});

// .emit -> para emitir
socket.emit('enviarMensaje', {
    usuario: 'Miguel cliente',
    mensaje: 'Wasaaaaa!!!!'
}, function(resp) {
    console.log(resp);
});