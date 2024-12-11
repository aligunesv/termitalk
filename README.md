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

1. Start the server on one device:  
   ```bash
   node server.js
   ```

2. Connect to the server from other devices:  
   ```bash
   telnet <server-ip> 3500
   ```

3. Start sending messages!  

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
