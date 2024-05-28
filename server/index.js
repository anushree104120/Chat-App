const express = require("express");
const socket = require("socket.io")
const app = express()
const cors = require("cors")


app.use(cors())

app.use(express.json())


const server = app.listen('3001',()=>{
    console.log("server is running");
})

io = socket(server)

//\>| This code initializes a Socket.IO server instance, passing the server object created by Express.js as an argument. Socket.IO is a JavaScript library that enables real-time, bidirectional communication between web clients and servers over WebSocket protocol. By passing the Express.js server to the socket() function, Socket.IO creates a WebSocket server that listens on the same port as the Express.js server.

// Overall, this setup allows your application to handle both HTTP requests using Express.js and real-time communication using Socket.IO on the same port (3001 in this case). This is commonly used in applications where real-time features like chat, notifications, or live updates are required.


io.on("connection",(socket)=>{
    console.log(socket.id);
    socket.on("join_room", (data)=>{
        socket.join(data);
        console.log("user joined a room" + data)
    })


    // basic setup for handling client connections and disconnections in a Socket.IO server.

    socket.on("disconnect",()=>{
        console.log("user disconnected");
    });
});

