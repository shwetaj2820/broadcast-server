const WebSocket = require('ws');
const { WebSocketServer } = WebSocket;

// creating websocket server on ws://localhost:8080
const wss = new WebSocketServer({port:8080});

wss.on('connection', (ws) => {
    console.log("new client connected!\n")
    ws.send('started the websocket server!\n');
})
