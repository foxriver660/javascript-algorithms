/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
let count =0
console.log((n + '').split(''))
for(let i=1; i<=n; i ++){
    if((i + '').split('').includes('0') && i%100 !== 0)
    count +=1
    else if(i%100 === 0) { count +=2}
}
return count;



//     let count = 0;
//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count += n;
    
//   }

//   return count;
}
   
   


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
console.log(countZeros(342));