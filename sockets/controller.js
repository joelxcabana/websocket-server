

const socketController = (socket) =>{
    console.log("cliente conectado",socket.id)

    socket.on('disconnect',()=>{
        console.log("cliente desconectado")
    })


    //escucha si se emite desde otro lado el mensaje
    socket.on("enviar-mensaje",(payload,callback)=>{
        //enviar mensaje a todos los clientes conectados
        socket.broadcast.emit('enviar-mensaje',payload)

        const id = 123456
        callback(id)
    })
}

module.exports = {
    socketController
}