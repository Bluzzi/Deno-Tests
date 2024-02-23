import { Socket } from "../Deps.ts";
import { Request } from "../types/Request.ts";

const serverInformation = {
  host: "localhost",
  port: 44250,
};

const client = new Socket({});

client.connect(
  { host: serverInformation.host, port: serverInformation.port },
  () => {
    console.log("TCP Client -> Connected to the server");

    const request: Request = {
      name: "connect",
      params: ["password", "yeaaah"],
    };

    client.write(JSON.stringify(request));
  },
);

client.on("data", (data) => {
  console.log(`TCP Client -> Data received : ${data.toString()}`);
});

client.on("end", () => {
  console.log("TCP Client -> Disconnected from server");
});
