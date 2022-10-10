
//Задание 1 из модуля функции без параметров
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
let arr3 = [1,3,4,7,0,6,8,null, undefined, 'string',2,3,5,5,5,5, true];
let arrEven = [];
let arrOdd = [];
let arrZero = [];
function findNumbers (){
    for (i = 0; i < arr3.length; i++) {
        if (!isNaN(arr3[i]) && arr3[i]%2 == 0 && arr3[i] !== 0 && arr3[i] !== null && typeof arr3[i] == "number"){
            arrEven.push(arr3[i])
        } else if (!isNaN(arr3[i]) && arr3[i]%2 !== 0 && typeof arr3[i] == "number") {
            arrOdd.push(arr3[i])
        } else if ( arr3[i] == 0) {
            arrZero.push(arr3[i])
        }
        }
        console.log("Четных чисел - " + arrEven.length);
        console.log("Нечетных чисел - " +arrOdd.length);  
        console.log("Нулей - " + arrZero.length); 
}
findNumbers()
    
//Задание 2 (Параметры и возвращаемое значение).
//Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. 
//Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function simpleOrNot(a) { 
var b = 0; 
for (i = 2; i <= a; i++) { 
    if (a > 1000) { 
        console.log('ошибка! Число больше 1000'); 
        break 
    } else if (a%i == 0){ 
    b = b + 1; 
    } 
} 
if (a < 1000 && b <= 1 ){ 
    console.log('число-то простое!');   
} else if ( a < 1000 ) {
    console.log('число составное') 
} 
} 

simpleOrNot(12);

//Задача 3 (Функции высшего порядка)
//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая  
//также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат. 
function Argument1(arg1) { 
return function Finally(arg2){ 
    let result = arg1 + arg2; 
    return result; 
} 
}; 

const forArg1 = Argument1(10); 
console.log(forArg1(75));

//Задача 4 (Функции обратного вызова)
//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
//Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

function twoNumber(start,stop) {
let interval = setInterval(function startPlus() {
    console.log(start);
    start++;
    
    if (start > stop) {
        clearInterval(interval)
    }
},1000);

}

twoNumber(5,15)


//Задача 5 (Функции в ES6)
//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.  
//Иначе говоря, умножает x на себя n раз и возвращает результат. 
//Используйте Arrow Function синтаксис. 
let result = 1; 
const degree = (a,b) => { 
result = a**b; 
console.log(result) 
return result; 
} 

degree(11,2);
