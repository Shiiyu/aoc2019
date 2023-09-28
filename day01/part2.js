import {readFile} from "fs";

function totalFuel(mass) {
  const fuel = Math.floor(mass / 3) - 2;

  return fuel > 0
    ? fuel + totalFuel(fuel)
    : 0;
}

readFile("./input.txt", "utf8", (_, data) => {
  console.log(data.split("\n").map(n => totalFuel(Number(n))).reduce((a, b) => a + b));
});
