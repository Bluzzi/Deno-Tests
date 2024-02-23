import { bold, gray, green, red, reset, yellow } from "std/fmt/colors.ts";

export const logger = {
  info: (message: string) => {
    console.log(`${yellow("-")} ${bold("Info")}    ${gray("»")} ${reset(message)}`);
  },

  success: (message: string) => {
    console.log(`${green("√")} ${bold("Success")} ${gray("»")} ${reset(message)}`);
  },

  error: (message: string) => {
    console.log(`${red("x")} ${bold("Error")}   ${gray("»")} ${reset(message)}`);
  }
};