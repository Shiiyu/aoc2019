import {readFile} from "fs";

readFile("./input.txt", "utf8", (_, data) => {
  const input = data.split(",").map(Number);

  input[1] = 12;
  input[2] = 2;

  loop: for(let i = 0; i < input.length; i += 4) {
    switch(input[i]) {
      case 1:
        input[input[i+3]] = input[input[i+1]] + input[input[i+2]];

        break;
      case 2:
        input[input[i+3]] = input[input[i+1]] * input[input[i+2]];

        break;
      default:
        break loop;
    }
  }

  console.log(input[0]);
});
