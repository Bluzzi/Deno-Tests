export type RequestName = "connect" | "tell" | "updateMoney";

export interface Request {
  name: RequestName;
  params: string[];
}
