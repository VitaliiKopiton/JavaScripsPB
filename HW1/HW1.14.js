// #### Задача 14

// Дано число `n=1000`. 
// Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
// Какое число получится? Посчитайте количество итераций, 
// необходимых для этого (итерация - это проход цикла), 
// и запишите его в переменную `num`.

var n = 1000;
var i = 0;

while  (n > 50) {
    n = n/2;
    i++;
    var num = n;
    //console.log(num);
}

console.log("Ответ " + num);
console.log('Количество итераций ' + i);
