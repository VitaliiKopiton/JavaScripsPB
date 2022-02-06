// #### Задача 10

// Отсортировать массив по возрастанию.

// ```javascript
 var arr = [6,5,4,3,2,1];
// // [1,2,3,4,5,6]
// ```

// **Внимание**!

// - Не разрашается использовать специальные методы массивов.

var e = 7;

while (e > 0) {
    for (i=0; i < 7; i++) {
        if (arr[i] > arr[i+1]){
            var t = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = t;
            console.log(i);
            console.log(arr);
            console.log(e);
        }
    } e=e-1;

}
console.log("finish " + arr);