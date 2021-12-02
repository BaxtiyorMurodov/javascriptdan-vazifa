/* 1-misol

let i = 0
while (i < 10) {
    console.log(`Baxtiyor`);
    i++
}*/

/* 2-misol

let i = 0
const myArray = [[false, true], [1, 2], 99, "yaxshi"]
while (i < myArray.length) {
    if (typeof(myArray[i])== 'string') {
        console.log(i);
    }
    i++;
}*/
// let i = 0
// let myArray = []
// while(i<100){
//     if (i % 3 == 0 && i % 5 == 0) {
//       myArray.push(`FizziiiBuzz`);
//     } else if (i % 5 == 0) {
//       myArray.push(`Buzz`);
//     } else if (i%3==0) {
//       myArray.push(`fizz`);
//     } else {
//       myArray.push(i);
//     }
//     i++
// }
// console.log(myArray);

// let myArray = [1, 2, `Ahmadjon`, null, 0,'' ,false, undefined]
// let res = []
// for (let i = 0; i < myArray.length; i++){
//     if (myArray[i]) {
//         res.push(myArray[i])
//     }

// }
// console.log(res);






// 3-mosol
let inputText = "custom string";
let outputText = "";
for (let i of inputText) {
  outputText = i + outputText;
}
console.log(outputText); 
































































