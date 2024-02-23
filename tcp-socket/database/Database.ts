import { MongoClient } from "../Deps.ts";

const client = new MongoClient();

await client.connect("mongodb://127.0.0.1:27017");

export default client.database("test");
