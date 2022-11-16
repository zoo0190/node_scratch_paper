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

function solution(arr) {
  var answer = 0;
  let num = 2;

  while (arr.length !== 1) {
    const val = arr.splice(0, 2);
    arr = [(val[0] * val[1]) / math.gcd(...val), ...arr];
  }

  console.log(arr);

  return answer;
}

solution([2, 6, 8, 14]);
// console.log('hi');
