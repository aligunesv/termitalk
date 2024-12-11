# TermiTalk  
**Anonymous Terminal Messaging System**  

TermiTalk is a lightweight Node.js-based application that allows anonymous messaging between computers on the same network, entirely via the terminal. Messages are saved in a `.txt` file, ensuring simplicity and minimal resource usage.  

---

## Features  
- 📂 Messages are saved as `.txt` files (overwriting the previous message).  
- 🕶️ Fully anonymous with unique IDs (UUIDs) for each message.  
- 🕒 Timestamped messages for clear tracking.  
- ⚡ Real-time communication between clients via the terminal.  
- 🎨 Aesthetic terminal output with colors and borders.  

---

## Requirements  
- Node.js (v16 or higher)  
- A shared network between devices  

---

## Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/aligunesv/termitalk.git  
   cd termitalk  
   ```

2. Install dependencies:  
   ```bash  
   npm install  
   ```

3. Update the file path for message storage in `server.js` (default: `C:/Users/Administrator/Desktop/msg/messages.txt`):  
   ```javascript  
   const msgFilePath = path.join("C:", "Users", "Administrator", "Desktop", "msg", "messages.txt");  
   ```

4. Start the server:  
   ```bash  
   node server.js  
   ```

---

## Usage  

### Step 1: Start the Server
1. Open a terminal on the server machine.
2. Run the following command to start the server:
   ```bash
   node server.js
   ```
3. The server will listen on port `3500` for incoming connections. You should see a message indicating the server is running.

### Step 2: Connect Clients to the Server
1. On another computer in the same network, clone the TermiTalk repository and install dependencies as described above.
2. Open the `client.js` file in a text editor.
3. Locate the following line and replace `SERVER_IP` with the IP address of the server (the computer running `server.js`). If you want to test on the same machine, you can use `127.0.0.1` as the IP address:
   ```javascript
   client.connect(3500, "SERVER_IP", () => {
       console.log("Connected to the server. Messages will be shown automatically when updated.");
       console.log("Write your message:");
   });
   ```
4. Save the changes and run the client with the following command:
   ```bash
   node client.js
   ```

### Step 3: Start Messaging
1. Once the client connects to the server, you can start typing your messages directly into the terminal.
2. Each message you send will:
   - Be saved in the `messages.txt` file on the server.
   - Overwrite the previous message in the file.
   - Be broadcasted to all other connected clients in real time.
3. All received messages will appear in the client terminal with their unique ID and timestamp.

### Example Interaction
1. **Server Terminal:**
   ```bash
   Server running on port 3500...
   New message received:
   ╭────────────────────────────╮
   │ ID: d4f7f6e0-8b...         │
   │ Time: 2024-12-11 14:35    │
   │ Message: Hello Server!     │
   ╰────────────────────────────╯
   ```
2. **Client Terminal:**
   ```bash
   Connected to the server. Messages will be shown automatically when updated.
   Write your message:
   ```
   After sending a message:
   ```bash
   Your message: Hi there!
   New message from another user:
   ╭────────────────────────────╮
   │ ID: abcd1234-ef...         │
   │ Time: 2024-12-11 14:37    │
   │ Message: Hello!            │
   ╰────────────────────────────╯
   ```

---

## Example Output  

### Terminal View  
```bash  
╭────────────────────────────╮  
│ New Message:              │  
│ ID: d4f7f6e0-8b...        │  
│ Time: 2024-12-11 14:35    │  
│ Message: Hello World!     │  
╰────────────────────────────╯  
```  

---

## Dependencies  

- [net](https://nodejs.org/api/net.html): For TCP connections.  
- [fs](https://nodejs.org/api/fs.html): To manage file operations.  
- [path](https://nodejs.org/api/path.html): For creating safe and dynamic file paths.  
- [uuid](https://www.npmjs.com/package/uuid): To generate unique IDs for messages.  
- [date-fns](https://date-fns.org/): For formatting timestamps.  
- [chalk](https://www.npmjs.com/package/chalk): To add color to terminal output.  
- [boxen](https://www.npmjs.com/package/boxen): To create styled message boxes in the terminal.  

---

## Contributing  

Contributions are welcome! If you have ideas to improve TermiTalk, feel free to open an issue or submit a pull request.  

---

## License  

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

---

## Future Plans  

- 🔒 **Message Encryption**: Add encryption for secure communication.  
- 📝 **Message Archiving**: Save and retrieve message history.  
- 🌐 **Cross-Network Support**: Enable messaging across different networks.  

---

Happy coding! 😊