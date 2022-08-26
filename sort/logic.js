let arr = []

for (let index = 0; index < 3; index++) {
    arr.push(Math.floor(Math.random() * 100))
}
// for (var i = 1; i < arr.length; i++) {

//     for (var j = 0; j < i; j++) {
//         if (arr[i] > arr[j]) {
//             var x = arr[i];
//             arr[i] = arr[j];
//             arr[j] = x;
//         }
//     }
// }

console.log(arr);


// real    0m0.084s
// user    0m0.079s
// sys     0m0.005s

// real    0m0.086s
// user    0m0.067s
// sys     0m0.020s