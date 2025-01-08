import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080});

const subscription: {[key: string] : {
    ws: WebSocket,
    rooms: string[]
}} = {

}

wss.on('connection', function connection(userSocket){

    userSocket.on('message', function message(data){
        const userMessage = JSON.stringify(data as unknown as string)
        userSocket.send('You have sent' + data);
    });
});