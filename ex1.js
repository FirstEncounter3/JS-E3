// Задание 1

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// Оформить в виде функции
// При выполнении задания необходимо учесть, 
// что массив может содержать не только числа, но и, например, знаки, null и так далее.

function countEvenOdd(arr) {
    let even = 0
    let odd = 0
    let zero = 0
    let noNumber = 0

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || typeof arr[i] === null || isNaN(arr[i]) ) {
            noNumber++
        } else if (arr[i] === 0) {
            zero++
        } else if (arr[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return `Even: ${even}, Odd: ${odd}, Zero: ${zero}, noNumber: ${noNumber}`;
}

const arr = [1, 2, 3, 4, 'hey', 0, null, NaN]

console.log(countEvenOdd(arr)); // "Even: 2, Odd: 2, Zero: 1, noNumber: 3"