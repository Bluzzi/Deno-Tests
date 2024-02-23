import userCollection from "./database/collections/User.ts";

const result = await userCollection.updateOne({ username: "Bluzzi" }, {
  $inc: { age: 1 },
});

console.log(result.modifiedCount);
