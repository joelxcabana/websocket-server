const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.server =  require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {}

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        //socket
        this.sockets()
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );
    }

    routes() {
        
        //this.app.use( this.paths.auth, require('../routes/auth'));
        
    }

    sockets(){
        this.io.on('connection',socket =>{
            console.log("cliente conectado")

            socket.on('disconnect',()=>{
                console.log("cliente desconectado")
            })


            //escucha si se emite desde otro lado el mensaje
            socket.on("enviar-mensaje",(payload)=>{
                //enviar mensaje a todos los clientes conectados
                this.io.emit('enviar-mensaje',payload)
            })


        })
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;