function solution(name) {
  let answer = 0;
  let moveCount = 0;
  let cursorIndex = 0;

  const ALPHABAT = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const nameArr = name.split("");

  for (let i = 0; i < name.length; i++) {
    findAlphabat();
    moveCount++;
  }

  return answer;
}

const findAlphabat = (target, value) => {
  const curIndex = ALPHABAT.indexOf(target);
  const targetIndex = ALPHABAT.indexOf(value);

  return Math.abs(targetIndex - curIndex);
};

const r = { name: "JEROEN", count: 56 };
const r2 = { name: "JAN", count: 23 };

const result1 = solution("AAA");
const result2 = solution("AAAAAA");

console.log(result1, result2);
