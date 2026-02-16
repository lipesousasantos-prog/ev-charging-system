const WebSocket = require('ws');

// OCPP 1.6 WebSocket server
const OCPP_SERVER_PORT = 8080;

const wsServer = new WebSocket.Server({ port: OCPP_SERVER_PORT });

wsServer.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log('Received message:', message);
        // Handle OCPP messages here
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log(`OCPP WebSocket server is running on ws://localhost:${OCPP_SERVER_PORT}`);