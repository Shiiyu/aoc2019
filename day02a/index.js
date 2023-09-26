import * as fs from "fs";

fs.readFile("./input.txt", "utf8", (_, data) => {
  const input = data.split(",").map(n => Number(n));

  input[1] = 12;
  input[2] = 2;

  loop: for(let i = 0; i < input.length; i += 4) {
    switch(input[i]) {
      case 1:
        input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]];

        break;
      case 2:
        input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];

        break;
      default:
        console.log(input[i]);

        break loop;
    }
  }

  console.log(input[0]);
});
