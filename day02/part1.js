import {readFile} from "fs";

readFile("./input.txt", "utf8", (_, data) => {
  const intcode = data.split(",").map(Number);

  intcode[1] = 12;
  intcode[2] = 2;

  loop: for(let i = 0; i < intcode.length; i += 4) {
    switch(intcode[i]) {
      case 1:
        intcode[intcode[i+3]] = intcode[intcode[i+1]] + intcode[intcode[i+2]];

        break;
      case 2:
        intcode[intcode[i+3]] = intcode[intcode[i+1]] * intcode[intcode[i+2]];

        break;
      default:
        break loop;
    }
  }

  console.log(intcode[0]);
});
