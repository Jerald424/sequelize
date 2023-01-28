const http = require("http");
const server = http.createServer(http);
const { Server } = require("socket.io");

try {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("########################################", socket.id);

    socket.on("join_room", async (data) => {
      await socket.join(data);
      console.log(`User ${socket.id} connect with ${data}`);
    });

    socket.on("send_message", async (data) => {
      console.log("Message", data);

      await socket.to(data.room).emit("recieve_message", data);
    });

    socket.on("disconnet", () => {
      console.log("user disconected", socket.id);
    });
  });
} catch (error) {
  res.status(500).send(error?.message);
}

server.listen(3001, () => {
  console.log("socket server running server 3001");
});
