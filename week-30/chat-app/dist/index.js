"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function connection(userSocket) {
    userSocket.on('message', function message(data) {
        console.log("Received", data);
        userSocket.send('You have sent' + data);
    });
});
