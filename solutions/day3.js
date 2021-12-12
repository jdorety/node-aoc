const { getInput } = require('../helpers');

const rawInputs = getInput('../inputs/day-3.txt');

const binStrings = rawInputs.split('\n');

const calcOccurrences = (input) => {
    const digitPop = [];
    for (let v of input) {
        for (let i in v) {
            if (digitPop.length - 1 < i) digitPop.push([0, 0]);
            if (v[i] === '0') digitPop[i][0] += 1
            else digitPop[i][1] += 1
        }
    }
    return digitPop;
}

const getMostPop = (input) => {
    const arr = calcOccurrences(input);
    return arr.map((comp) => {
        if (comp[0] > comp[1]) return "0"
        else return "1"
    }).join("")
}

const getLeastPop = (input) => {
    const arr = calcOccurrences(input)
    return arr.map((comp) => {
        if (comp[0] > comp[1]) return "1"
        else return "0"
    }).join("");
}

const calcConsumption = (input) => {
    const mostPop = getMostPop(input);
    const leastPop = getLeastPop(input);
    const parseGammas = Number.parseInt(mostPop, 2);
    const parseEpsilons = Number.parseInt(leastPop, 2);
    const powerConsumption = parseGammas * parseEpsilons
    return powerConsumption;
}

const part1 = calcConsumption(binStrings); // 3895776

const filterRating = (input, i, cb) => {
    const criteria = cb(input);
    console.log(i);
    const filterArr = (array) => array.filter((v) => (v[i] === criteria[i]))
    const filtered = filterArr(input);
    console.log({ filtered })
    if (filtered.length === 1) return filtered[0];
    return filterRating(filtered, i + 1, cb);
}

const ox = filterRating(binStrings, 0, getMostPop);
const co2 = filterRating(binStrings, 0, getLeastPop);
console.log(ox, co2);
const part2 = Number.parseInt(ox, 2) * Number.parseInt(co2, 2); // 7928162
console.log({ part1, part2 });
