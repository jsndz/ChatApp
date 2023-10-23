const express = require('express');
const http = require('http');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('a user connected',socket.id);

    setInterval(()=>{
        socket.emit('from_server')
    },2000);

    socket.on('from_client',()=>{
        console.log("message tos server")
    })
});
app.use('/',express.static(__dirname + '/public'))



server.listen(3000,()=>{
    console.log('server started at 3000')
})