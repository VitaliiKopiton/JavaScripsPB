// #### Задача 9

// Отсортировать массив по убыванию.

// ```javascript
var arr = [1,2,3,4,5,6];
// // [6,5,4,3,2,1]
// ```

// **Внимание**!

// - Не разрашается использовать специальные методы массивовa

var e = 25;

while (e > 0) {
    for (i=0; i<6; i++) {

    if (arr[i] < arr[i+1]) {
        var t = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = t;
        //e = 1;
        console.log("i= " + i);
        console.log(arr);
        console.log("e= " + e);
        console.log("   ");

    } else {
        e = e - 1;
        console.log("e==" + e)
    }
}
}



// do {

//     for (var i = 0; i<7; i++) {

//         if (arr[i] < arr[i+1]) {

//             var t = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = t;
//             var e = 1;
//             console.log("i= " + i);
//             console.log(arr);
//             console.log("e= " + e);

//         } else {
//             e = 0;
//         }

//         console.log("ee=" + e);
//         break;
//     }
   
// }  while (e == 1);

console.log('finish ' + arr);
