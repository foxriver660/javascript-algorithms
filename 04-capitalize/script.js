/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const newStr = str.split(' ').map(function(word) {
        if(word === "") {return word} else {
        return word[0].toUpperCase() + word.slice(1);}
        }).join(' ');
        return newStr;
   }

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(capitalize('слово '));
console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"