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
    
    var parametros= { sala: 'riberasalud'};

    socket.on('join',(parametros, callback)=>{
        console.log("Entra en le join");
        if(typeof parametros.sala !=='string'){
            console.log("error");
            callback("no es un string")
        }else{
            console.log("Accede al join " +parametros.sala);
            socket.join(parametros.sala);
            console.log(socket.id);
            io.to(parametros.sala).emit('serverNewMessage',{
                from: 'Admin',
                text: 'Un nuevo usario se ha unido a la sala '+ parametros.sala,
                createdAt: new Date().getTime()
            });



        }
    })
  
});





server.listen(PORT,()=>console.log(`ServiDor escuchando en el puerto ${PORT}` ));