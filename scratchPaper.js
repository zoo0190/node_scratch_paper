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
