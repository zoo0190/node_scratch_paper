import * as math from './math/index.js';

// function solution(ingredient) {
//   let answer = 0;
//   const tempArr = [];

//   ingredient.forEach((item) => {
//     tempArr.push(item);
//     if (tempArr.slice(-4).toString() === '1,2,3,1') {
//       tempArr.splice(-4);
//       answer += 1;
//     }
//   });

//   return answer;
// }

// console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
// console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));

// function solution2(ingredient) {
//   let answer = 0;
//   const tempArr = [];

//   ingredient.forEach((item) => {
//     tempArr.push(item);
//     if (tempArr.slice(-4).toString() === '1,2,3,1') {
//       tempArr.splice(-4);
//       answer += 1;
//     }
//   });

//   return answer;
// }

// console.log(solution2([2, 1, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1]));

// function solution(board) {
//   const total = board.length;

//   for (let row = 0; row < total; row++) {
//     for (let col = 0; col < total; col++) {
//       const prevRow = row - 1 < 0 ? 0 : row - 1;
//       const nextRow = row + 1 > total ? total : row + 1;
//       const prevCol = col - 1 < 0 ? 0 : col - 1;
//       const nextCol = col + 1 > total ? total : col + 1;

//       const currentVal = board[row][col];

//       if (currentVal === 1) {
//         board[prevRow][prevCol] === 0 && (board[prevRow][prevCol] = 'X');
//         board[prevRow][col] === 0 && (board[prevRow][col] = 'X');
//         board[prevRow][nextCol] === 0 && (board[prevRow][nextCol] = 'X');

//         board[row][prevCol] === 0 && (board[row][prevCol] = 'X');
//         board[row][col] = 'X';
//         board[row][nextCol] === 0 && (board[row][nextCol] = 'X');

//         if (row !== total - 1) {
//           board[nextRow][prevCol] === 0 && (board[nextRow][prevCol] = 'X');
//           board[nextRow][col] === 0 && (board[nextRow][col] = 'X');
//           board[nextRow][nextCol] === 0 && (board[nextRow][nextCol] = 'X');
//         }
//       }
//     }
//   }

//   return board.flatMap((item) => item).filter((item) => item === 'X').length;
// }

// function solution(lines) {
//   var answer = 0;

//   lines.sort((a, b) => a[0] - b[0]);
//   console.log(lines);
// }

// solution([
//   [-1, 1],
//   [0, 3],
//   [2, 4],
// ]);

// solution([
//   [0, 5],
//   [3, 9],
//   [1, 10],
// ]);

// function solution(babbling) {
//   var answer = 0;

//   for (let s of babbling) {
//     const ret = s.replace(/(aya|ye|woo|ma){1}/g, '');
//     console.log(ret);
//     if (!ret) answer += 1;
//   }

//   return answer;
// }

// console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']));

// function solution(babbling) {
//   var answer = 0;

//   for (let s of babbling) {
//     let ret = s.match(/aya|ye|woo|ma/g);
//     ret = ret ?? [];

//     if (ret.join('') === s) {
//       for (let i = 0; i < ret.length - 1; i++) {
//         if (ret[i] === ret[i + 1]) {
//           answer -= 1;
//           break;
//         }
//       }
//       answer += 1;
//     }
//   }

//   return answer;
// }

// console.log(solution(['ayaye', 'uuu', 'yeyeayayeye', 'yemawoo', 'ayaayaa']));

// function solution(k, m, score) {
//   var answer = 0;
//   const arr = [];
//   score.sort((a, b) => b - a);

//   const boxNum = parseInt(score.length / m);

//   for (let n = 1; n <= boxNum; n++) {
//     arr.push(score.slice((n - 1) * m, n * m));
//   }

//   answer = arr.reduce((acc, cur) => {
//     const minVal = Math.min(...cur);
//     acc += minVal * cur.length;
//     return acc;
//   }, 0);

//   return answer;
// }

// solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
// solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);

// function solution(s) {
//   let turn = 0;
//   let zeroNum = 0;

//   const recur = (s) => {
//     let zero = 0;
//     if (s === '1') return;
//     for (let n of s) {
//       if (n === '0') zero += 1;
//     }
//     turn += 1;
//     zeroNum += zero;
//     return recur((s.length - zero).toString(2));
//   };

//   recur(s);
//   return [turn, zeroNum];
// }

// solution('110010101001');

// function solution(n, a, b) {
//   if (a % 2 === 0 && a - 1 === b) return 1;
//   if (a % 2 === 1 && a === b - 1) return 1;

//   a = parseInt(a / 2) + (a % 2);
//   b = parseInt(b / 2) + (b % 2);

//   return 1 + solution(n / 2, a, b);
// }

// console.log(solution(8, 4, 7));

// function recur(n) {
//   if (n === 1) return 1;
//   return n + recur(n - 1);
// }

// console.log(recur(5));

// function solution(arr) {
//   var answer = 0;
//   let num = 2;

//   while (arr.length !== 1) {
//     const val = arr.splice(0, 2);
//     arr = [(val[0] * val[1]) / math.gcd(...val), ...arr];
//   }

//   console.log(arr);

//   return answer;
// }

// solution([2, 6, 8, 14]);
// console.log('hi');

// function solution(numbers) {
//   var answer = 0;
//   const arr = [];
//   const toArr = numbers.split('');
//   for (let n = 1; n <= toArr.length; n++) {
//     const val = math.permutation(toArr, n);
//     for (let nn of val) {
//       const strToNum = +nn.join('');
//       if (strToNum !== 0 && strToNum !== 1) {
//         arr.push(strToNum);
//       }
//     }
//   }

//   const set = new Set([...arr]);
//   const setToArr = [...set];
//   console.log(setToArr);
//   for (let nnn of setToArr) {
//     const range = parseInt(Math.sqrt(nnn));
//     for (let nnnn = 2; nnnn < range; nnnn++) {
//       if (nnn % nnnn === 0) {
//         answer -= 1;
//         break;
//       }
//     }
//     answer += 1;
//   }

//   return answer;
// }

// console.log(solution('011'));

// function solution(survey, choices) {
//   const compareArr = [
//     ['R', 'T'],
//     ['C', 'F'],
//     ['J', 'M'],
//     ['A', 'N'],
//   ];

//   const choiceObj = {
//     1: 3,
//     2: 2,
//     3: 1,
//     4: 0,
//     5: 1,
//     6: 2,
//     7: 3,
//   };

//   const scoreObj = {
//     R: 0,
//     T: 0,
//     C: 0,
//     F: 0,
//     J: 0,
//     M: 0,
//     A: 0,
//     N: 0,
//   };

//   survey.forEach((item, idx) => {
//     if (choices[idx] >= 5) {
//       scoreObj[item[1]] += choiceObj[choices[idx]];
//     } else {
//       scoreObj[item[0]] += choiceObj[choices[idx]];
//     }
//   });

//   return compareArr.reduce((acc, cur) => {
//     acc += scoreObj[cur[0]] >= scoreObj[cur[1]] ? cur[0] : cur[1];
//     return acc;
//   }, '');
// }

// console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
// console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3]));

// function solution(number, limit, power) {
//   var answer = 0;
//   const numberArr = Array(number)
//     .fill()
//     .map((_, idx) => idx + 1);

//   const divisorArr = numberArr.map((item) => {
//     let total = 0;
//     const range = Math.floor(Math.sqrt(item));

//     for (let n = 1; n <= range; n++) {
//       if (item % n === 0) total += 2;
//       if (item / n === n) total -= 1;
//     }
//     return total;
//   });

//   answer = divisorArr.reduce((acc, cur) => {
//     acc += cur > limit ? power : cur;
//     return acc;
//   }, 0);

//   return answer;
// }

// solution(10, 3, 2);

// function solution(n) {
//   let ans = -1;

//   while (true) {
//     const value = parseInt(n / 2);
//     if (n % 2 === 1) ans -= 1;
//     if (value === 1) break;
//     n = value;
//   }
//   console.log(ans);
//   return Math.abs(ans);
// }

// solution(6);

function solution(arr1, arr2) {
  const answer = [];

  for (let row of arr1) {
    const arr = [];
    for (let i = 0; i < arr2[0].length; i++) {
      let val = 0;
      for (let j = 0; j < arr2.length; j++) {
        val += row[j] * arr2[j][i];
      }
      arr.push(val);
    }
    answer.push(arr);
  }

  return answer;
}

solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [1, 2],
    [4, 5],
  ]
);
