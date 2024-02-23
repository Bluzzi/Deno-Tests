import database from "../Database.ts";

export interface User {
  username: string;
  age: number;
}

const userCollection = database.collection<User>("user");
export default userCollection;
