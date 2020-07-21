const path = require('path');
const http = require ('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join (__dirname, '/public');
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.static(publicPath));


const server = http.createServer(app);
const io = socketIO(server);

io.on('connection',(socket)=>{
    
    console.log("Nuevo usuario conectado");

    
    socket.on('clientNewMessage',(msg)=>console.log(msg));
    
    socket.emit('serverNewMessage',{
    from: 'servidor',
    text:'Es una prueba',
    createdAt:192140921
    });

    socket.on('clientNewMessage',(msg)=>{
        io.emit('serverNewMessage',"WHOLALAAA");
    });

    

});





server.listen(PORT,()=>console.log(`ServiDor escuchando en el puerto ${PORT}` ));