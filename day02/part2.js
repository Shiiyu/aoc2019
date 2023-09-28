import {readFile} from "fs";

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

readFile("./input.txt", "utf8", (_, data) => {
  // Date of Apollo 11 moon landing
  const moonLanding = 19690720;
  // Get base intcode and clone into arrays for noun and verb
  const baseIntcode = data.split(",").map(Number);
  const nounIntcode = [...baseIntcode];
  const verbIntcode = [...baseIntcode];

  // Increment the respective index for noun and verb
  nounIntcode[1]++;
  verbIntcode[2]++;

  // Get output for each intcode
  const baseOutput = processIntcode(baseIntcode);
  const nounOutput = processIntcode(nounIntcode);
  const verbOutput = processIntcode(verbIntcode);
  // Calculate differences between the base intcode and the noun, verb, and moon landing
  const moonDiff = moonLanding - baseOutput;
  const nounDiff = nounOutput - baseOutput;
  const verbDiff = verbOutput - baseOutput;
  // Calculate the noun and verb
  const noun = Math.floor(moonDiff / nounDiff);
  const verb = moonDiff % noun / verbDiff;

  console.log((100 * noun) + verb);
});
