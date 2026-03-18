const http = require("http");
const WebSocket = require("ws");

// create HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("HTTP server working");
});

// attach WebSocket to SAME server
const wss = new WebSocket.Server({ server });

// WebSocket logic
wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.send("Hello from WebSocket");

    ws.on("message", (msg) => {
        console.log("Received:", msg.toString());
        ws.send("Server received: " + msg);
    });
});

// start server (ONE PORT)
server.listen(5000, () => {
    console.log("HTTP + WebSocket running on port 5000");
});