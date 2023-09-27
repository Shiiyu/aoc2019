import * as fs from "fs";

function processIntcode(intcode) {
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

  return intcode[0];
}

fs.readFile("./input.txt", "utf8", (_, data) => {
  const input = data.split(",").map(n => Number(n));

  for(let i = 0; i < 100; i++) {
    for(let j = 0; j < 100; j++) {
      const intcode = [...input];

      intcode[1] = i;
      intcode[2] = j;

      const output = processIntcode(intcode);

      if(output === 19690720)
        console.log((100 * i) + j);
    }
  }
});
