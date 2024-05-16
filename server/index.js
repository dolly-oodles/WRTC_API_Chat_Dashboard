import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "http://127.0.0.1/:5173" },
});

const PORT = 3000;
io.on("connection", (socket) => {
  console.log("Connected");

  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});

function error(err, req, res, next) {
  // log it
  if (!test) console.error(err.stack);

  // respond with 500 "Internal Server Error".
  res.status(500);
  res.send("Internal Server Error");
}
app.use(error);
server.listen(3000, () => {
  console.log("listening on Port 3000");
});
