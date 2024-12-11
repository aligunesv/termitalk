const net = require("net");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { format } = require("date-fns");

(async () => {
    const chalk = (await import("chalk")).default;
    const boxen = (await import("boxen")).default;

    // YOUR PATH FOR MESSAGES
    const msgFilePath = path.join("C:", "Users", "Administrator", "Desktop", "msg", "messages.txt");
    const clients = [];

    const formatMessage = (id, timestamp, message) => {
        return `${chalk.green.bold("ID")}: ${chalk.yellow(id)}\n${chalk.green.bold("Time")}: ${chalk.cyan(timestamp)}\n${chalk.green.bold("Message")}: ${chalk.white(message)}`;
    };

    const server = net.createServer((socket) => {
        console.log(chalk.blue.bold("A new client is connected."));
        clients.push(socket);

        socket.on("data", (data) => {
            const message = data.toString().trim();
            const timestamp = format(new Date(), "yyyy-MM-dd HH:mm:ss");
            const id = uuidv4();
            const formattedMessage = formatMessage(id, timestamp, message);

            fs.writeFileSync(msgFilePath, `${id} | ${timestamp} | ${message}\n`, "utf8");

            console.log(
                boxen(formattedMessage, {
                    padding: 1,
                    margin: 1,
                    borderStyle: "double",
                    borderColor: "green",
                    backgroundColor: "#222"
                })
            );

            clients.forEach((client) => {
                if (client !== socket) {
                    client.write("New message:\n" + formattedMessage);
                }
            });
        });

        socket.on("close", () => {
            console.log(chalk.red.bold("A client has closed the connection."));
            const index = clients.indexOf(socket);
            if (index > -1) clients.splice(index, 1);
        });
    });

    server.listen(3500, "0.0.0.0", () => {
        console.log(
            boxen(chalk.white.bold("Server initialised: Listening on port 3500."), {
                padding: 1,
                margin: 1,
                borderStyle: "double",
                borderColor: "blue"
            })
        );
    });
})();
