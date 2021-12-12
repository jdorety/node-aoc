const { getInput } = require('../helpers');

const rawInputs = getInput('../inputs/day-2.txt');

const directions = rawInputs.split('\n').map(i => i.split(' ')).map(d => [d[0], Number(d[1])]);


const calculatePart1 = (input) => {
    let x = 0;
    let y = 0;
    const move = {
        forward: (n) => x += n,
        down: (n) => y += n,
        up: (n) => y -= n
    }
    for (let d of input) {
        move[d[0]](d[1])
    }
    return x * y;
}

const part1 = calculatePart1(directions);
console.log(part1); // 1524750

const calculatePart2 = (input) => {
    let x = 0;
    let y = 0;
    let aim = 0;
    const move = {
        down: (n) => aim += n,
        up: (n) => aim -= n,
        forward: (n) => {
            x += n;
            y += aim * n
        }
    }
    for (let d of input) {
        move[d[0]](d[1])
    }
    return x * y;
}

const part2 = calculatePart2(directions);
console.log(part2); // 1592426537
