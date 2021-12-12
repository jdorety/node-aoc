const { getInput } = require("../helpers");

const rawInputs = getInput("../inputs/day4.txt");

const inputArr = rawInputs.split("\n").filter((x) => x !== "");
const drawing = inputArr
  .shift()
  .split(",")
  .map((d) => Number(d));
const cards = [[]];

let cardsI = 0;
for (let i in inputArr) {
  if (Number(i) !== 0 && i % 5 === 0) {
    cardsI += 1;
    cards.push([]);
  }
  cards[cardsI].push(inputArr[i]);
}

const gameCards = cards.map((card) =>
  card.map((row) =>
    row
      .split(" ")
      .filter((n) => n !== "")
      .map((num) => [Number(num), false])
  )
);

const checkForWin = (card) => {
  const colIndexes = [0, 0, 0, 0, 0];
  let columnWin = false;
  let rowWin = false;
  for (let row of card) {
    if (row.every((n) => n[1] === true)) rowWin = true;
    for (let col in row) {
      if (row[col][1] === true) {
        colIndexes[col] += 1;
      }
    }
  }
  if (colIndexes.includes(5)) columnWin = true;
  if (columnWin && rowWin) return false;
  else if (columnWin || rowWin) return true;
  else return false;
};

const playTurn = (drawnNum, cards) =>
  cards.map((card) =>
    card.map((row) =>
      row.map((num) => {
        if (num[0] === drawnNum) return [num[0], true];
        else return num;
      })
    )
  );

const calculateScore = (card) => {
  return (
    card.flat(1).reduce((prev, curr) => {
      if (curr[1] === false) return (prev += curr[0]);
      return prev;
    }, 0) * firstWon.draw
  );
};
const winningCards = [];

const play = (numbers, cards) => {
  let played = [...cards];
  for (let draw of numbers) {
    played = playTurn(draw, played);
    for (c of played) {
      if (checkForWin(c)) {
        winningCards.push({ c, draw });
        played.splice(
          played.findIndex((v) => v.c === c),
          1
        );
      }
    }
  }
};
play(drawing, gameCards);
const firstWon = winningCards[0];
console.log(winningCards);
const part1 = calculateScore(firstWon.c); // 69579
const lastWon = winningCards[winningCards.length - 1];
const part2 = calculateScore(lastWon.c);
console.log({ part1, part2 });

/*
wrong answers
13851
38961
9639
46332
27783
*/