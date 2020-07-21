console.log("Main js cargado");
var socket = io();
socket.on('connect', ()=>
{
    console.log("Te has conectado")
    socket.emit('clientNewMessage',{
        from: 'Cliente',
        text: 'Hola te envio un mensaje',
        createdAt: 123
    });
});
socket.on('serverNewMessage',(ev)=>{console.log('nuevo mensaje ', ev)});
socket.on('disconnect',()=>console.log("Te has desconectado del servidor"));
