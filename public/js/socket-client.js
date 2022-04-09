//referencias del html
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')

const txtMensaje  = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')
 

const socket = io();
//listenes escucha cambios o eventos


//cuando se conecta
socket.on('connect',()=>{
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
});

socket.on('disconnect',()=>{
    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
});

socket.on('enviar-mensaje',(payload)=>{
    console.log("nuevo mensaje-->",payload)
})


btnEnviar.addEventListener('click',()=>{
    const mensaje = txtMensaje.value

    const payload = {
        mensaje,
        id:'sefw234f4f34f',
        fecha : new Date().getTime()
    }

    socket.emit('enviar-mensaje',payload,(id)=>{
        console.log("desde el server ",id)
    })
})

//on ===> para escuchar
//emit =>> para enviar