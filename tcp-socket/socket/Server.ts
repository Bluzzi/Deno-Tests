import { Server, Socket } from "../Deps.ts";
import { Request } from "../types/Request.ts";

const port = 44250;

const server = new Server();

server.listen(port, () => {
  console.log(`TCP Server -> Listening on the port ${port}`);
});

server.on("connection", (socket: Socket) => {
  console.log(
    `TCP Server -> Connection started with ${socket.remoteAddress}-${socket.remotePort}`,
  );

  const senderTask = setInterval(() => {
    socket.write("Ping !");
  }, 5000);

  socket.on("data", (data) => {
    const request: Request = JSON.parse(JSON.stringify(data.toString()));

    console.log("TCP Server -> Data received :");
    console.log(request);

    socket.write("Ok");
  });

  socket.on("error", (error) => {
    console.log(`TCP Server -> ${error.stack}`);
  });

  socket.on("end", () => {
    clearInterval(senderTask);

    console.log(
      `TCP Server -> Connection ended with ${socket.remoteAddress}-${socket.remotePort}`,
    );
  });
});

server.on("close", () => {
  console.log("TCP Server -> Server stopped");
});
