const net = require("net");
const readline = require("readline");

const client = new net.Socket();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// YOUR SERVER IP (YOU CAN USE YOUR OWN CLIENT IP IF YOU WANT.)
client.connect(3500, "SERVER_IP", () => {
    console.log("Connected to the server. Messages will be shown automatically when updated.");
    console.log("Write your message:");
});

client.on("data", (data) => {
    console.clear(); 
    console.log("Message from Server:\n" + data.toString());
});

rl.on("line", (input) => {
    client.write(input); 
});

client.on("close", () => {
    console.log("Connection closed.");
});
