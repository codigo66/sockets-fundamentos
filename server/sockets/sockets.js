const { io } = require('../server');
io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    // Escuchar
    client.on('enviarMensaje', (data, callback) => {
        //console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (data.usuario) {
        //     callback({
        //         resp: "OK"
        //     });
        // } else {
        //     callback({
        //         resp: "BAD"
        //     });
        // }
    });
    // Emitir
    client.emit('enviarMensaje', {
        usuario: "Admin",
        mensaje: "Wasaaaaa!!!!"
    });
});