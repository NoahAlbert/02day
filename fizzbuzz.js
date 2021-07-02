// for (i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log('fizzbuzz')
//   } else {
//     if (i % 3 === 0) {
//       console.log('fizz')
//     } else {
//       if (i % 5 === 0) {
//         console.log('buzz')
//       } else {
//         console.log(i)
//       }
//     }
//   }
// }

for (let i = 1; i <= 100; i++){
  if (i%15 === 0){
    console.log('fizzbuzz')
  } else if (i % 3 === 0){
    console.log('fizz')
  } else if (i % 5 === 0){
    console.log('buzz')
  } else {
    console.log(i)
  }
}

// for (i = 1; i <= 100; i++) {
//     const output = (i % 15 === 0)
//         ? 'FIZZBUZZ'
//         : (i % 3 === 0)
//             ? 'FIZZ'
//             : (i % 5 === 0)
//                 ? 'BUZZ'
//                 : i
//     console.log(output)
// }

// for (i = 1; i <= 100; i++) {
//   const output = (i % 21 === 0)
//     ? 'GERONIMO'
//     : (i % 3 === 0)
//       ? 'GERO'
//       : (i % 7 === 0)
//         ? 'NIMO'
//         : i
//   console.log(output)
// }

// for (i = 1; i <= 100; i++) {
//     let output = ''
//     if(i % 3 === 0) {
//         output += 'FIZZ'
//     }
//     if(i % 5 === 0) {
//         output += 'BUZZ'
//     }
//     console.log((output === '') ? i : output)
// }