const { getInput } = require('../helpers');
// part 1
const inputs = getInput('../inputs/day-1-1.txt');
const depths = inputs.split("\n").map(d => Number(d));
let accumulator = 0;
for (let i in depths) {
    if (i > 0) {
        if (depths[i] > depths[i - 1]) accumulator += 1;
    }
}

console.log(accumulator);
// 1233

// part 2
const deepDepths = []
let deepDepthsAcc = 0
for (let i in depths) {
    if (i > 1 && !Number.isNaN(i)) {
        deepDepths.push(depths[i] + depths[i - 1] + depths[i - 2])
    }
}
console.log(deepDepths)
for (let i in deepDepths) {
    if (i > 0) {
        if (deepDepths[i] > deepDepths[i - 1]) deepDepthsAcc += 1;
    }
}
// 1275
console.log(deepDepthsAcc);