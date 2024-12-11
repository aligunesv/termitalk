const net = require("net");
const readline = require("readline");

const client = new net.Socket();

// Kullanıcıdan girdi almak için
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Server'a bağlan
client.connect(3500, "45.131.3.57", () => {
    console.log("Sunucuya bağlanıldı. Mesajlar güncellendiğinde otomatik gösterilecek.");
    console.log("Mesajınızı yazınız:");
});

// Server'dan mesaj geldiğinde
client.on("data", (data) => {
    console.clear(); // Terminali temizle
    console.log("Sunucudan Gelen Mesaj:\n" + data.toString());
});

// Kullanıcıdan giriş al
rl.on("line", (input) => {
    client.write(input); // Mesajı sunucuya gönder
});

client.on("close", () => {
    console.log("Bağlantı kapandı.");
});
