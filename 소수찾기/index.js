const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  if (number % 2 === 0) {
    return number === 2 ? true : false;
  }

  const numSqrt = parseInt(Math.sqrt(number));

  for (let i = 3; i <= numSqrt; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

function permute(nums) {
  const result = []; // 결과를 저장할 배열

  // 재귀적으로 순열을 구하는 함수
  function backtrack(path, options) {
    if (path.length !== 0) {
      const nNum = parseInt(path.join(""));
      const prime = isPrime(nNum);

      if (prime && result.indexOf(nNum) === -1) {
        result.push(nNum);
      }

      if (options.length === 0) {
        return;
      }
    }

    for (let i = 0; i < options.length; i++) {
      path.push(options[i]); // 현재 요소를 경로에 추가
      backtrack(
        path,
        options.filter((_, index) => index !== i)
      );
      path.pop(); // 백트래킹: 이전 상태로 되돌림
    }
  }

  backtrack([], nums); // 초기 경로는 빈 배열, 옵션은 주어진 숫자 배열
  return result;
}

const solution = (numbers) => {
  const numArr = numbers.split("").map(Number);
  return permute(numArr).length;
};

const r = solution("011");
console.log(r);
// "17"	3
// "011" 2
