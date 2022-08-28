const http = require('http');
const ws = require('ws');

const httpServer = http.createServer({});
const wsServer = new ws.Server({ server: httpServer });

wsServer.on('connection', (ws) => {
    
    ws.on('message', (message) => {
        console.log('Received on:', message);
    });
    
    ws.send('Hello Client');
});

httpServer.listen(8000);