const express=require('express');
const { disconnect } = require('process');
const app=express();
var server=require('http').createServer(app);
var io=require('socket.io').listen(server);

server.listen(8000);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

connections=[];

io.sockets.on('connection', function(socket){
    console.log("ulandi")
    connections.push(socket);
    socket.on('disconnect', function(data){
        connections.splice(connections.indexOf(socket), 1)
        console.log('ketdi')
    });
})
