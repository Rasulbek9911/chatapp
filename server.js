const express=require('express');
const { Socket } = require('dgram');
const app=express();
const server=require('http').createServer(app);
const io=require('socket.io').listen(server);

server.listen(8000, ()=>{
    console.log('8000-portni eshitishni boshladim.')
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

users=[];
connections=[];


io.sockets.on('connection', function(socket){
    console.log("New connection");
    connections.push(socket);
    

socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1);
    console.log("Diconnect");
});
socket.on('send mess', function(data){
    io.sockets.emit('add mess', {mess: data.mess, name: data.name, classname: data.classname});
});
});
