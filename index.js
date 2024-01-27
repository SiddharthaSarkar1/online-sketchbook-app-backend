import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const PORT = 8080;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: "http://localhost:3000",
});

io.on("connection", () => {
  console.log("Server Connected");
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
