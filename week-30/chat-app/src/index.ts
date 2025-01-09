import { WebSocketServer, WebSocket } from "ws";
import { createClient } from 'redis';

const publishClient = createClient();
publishClient.connect();

const subscribeClient = createClient();
subscribeClient.connect();

const wss = new WebSocketServer({ port:8081 });

const subscriptions: {[key: string] : {
    ws: WebSocket,
    rooms: string[]
}} = {

}

wss.on('connection', function connection(userSocket){
    const id = randomId();
    subscriptions[id] = {
        ws: userSocket,
        rooms: []
    }

    userSocket.on('message', function message(data){
        const parsedMessage = JSON.parse(data as unknown as string);
        if (parsedMessage.type === 'SUBSCRIBE'){
            subscriptions[id].rooms.push(parsedMessage.roomId);
            if (oneUserSubscribedTo(parsedMessage.roomId)){
                subscribeClient.subscribe(parsedMessage.roomId, (message)=> {
                    const parsedMessage = JSON.parse(message);
                    Object.keys(subscriptions).forEach((userId) => {
                        const { ws, rooms } = subscriptions[userId];
                        if (rooms.includes(parsedMessage.roomId)){
                            ws.send(parsedMessage.message);
                        }
                    })
                })
            }
        }

        if(parsedMessage.type === "UNSUBSCRIBE"){
            subscriptions[id].rooms = subscriptions[id].rooms.filter(x => x !== parsedMessage.roomId);
            if (lastPersonLeftRoom(parsedMessage.roomId)){
                subscribeClient.unsubscribe(parsedMessage.roomId);
            }
        }

        if (parsedMessage.type === "sendMessage"){
            const message = parsedMessage.message;
            const roomId = parsedMessage.roomId;

            publishClient.publish(roomId, JSON.stringify({
                type: "sendMessage",
                roomId: roomId,
                message: message,
            }))
        }
    });
});

function randomId(){
    return Math.random();
}

function oneUserSubscribedTo(roomId:string){
    let totalInterestedPeople = 0;
    Object.keys(subscriptions).map(userId => {
        if(subscriptions[userId].rooms.includes(roomId)){
            totalInterestedPeople++;
        }
    })
    if(totalInterestedPeople == 1){
        return true;
    }

    return false;
}

function lastPersonLeftRoom(roomId:string){
    let totalInterestedPeople = 0;
    Object.keys(subscriptions).map(userId => {
        if(subscriptions[userId].rooms.includes(roomId)){
            totalInterestedPeople++;
        }
    })
    if(totalInterestedPeople == 1){
        return true;
    }

    return false;
}


