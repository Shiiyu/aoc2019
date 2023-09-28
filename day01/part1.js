import {readFile} from "fs";

readFile("./input.txt", "utf8", (_, data) => {
  console.log(data.split("\n").map(n => Math.floor(Number(n) / 3) - 2).reduce((a, b) => a + b));
});
