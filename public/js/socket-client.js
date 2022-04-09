//referencias del html
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')

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