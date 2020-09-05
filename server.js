const express=require('express');
const app=express();
const path=require('path');
const http=require('http');
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

io.on('connection', function(socket){
    console.log("New connection");
    connections.push(socket);
    

socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1);
    console.log("Diconnect");
});
});



