console.log("Main js cargado");
var socket = io();
socket.on('connect', ()=>
{
    console.log("Se ha conectado a socket.io");
  
    console.log(socket.id);
   

});
var parametros= { sala: 'riberasalud'}
socket.emit('join', parametros, (err)=>{
    if(err) console.error(err);
    console.log("Tes has unido a la sala"+parametros.sala);
   

    
})

socket.on('serverNewMessage',(ev)=>console.log('Nuevo mensaje->',ev));










socket.on('disconnect',()=>console.log("Te has desconectado del servidor"));
