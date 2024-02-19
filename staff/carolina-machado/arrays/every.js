function every(array, func) {


    for (let i = 0; i < array.length; i++) {
        let element = array[i]

        if (func(element) !== true) {
            return false
        }
    }
    return true
}

/*CASE 1
    let arr1 = [4, 4, 4]
    let evenNumber = function (num) {
        if (num % 2 === 0) {
            return true
        } else {
            return false
        }
    }

    console.log(every(arr1, evenNumber))*/

//CASE 2

let arr1 = [10, 20, 40]
let biggerThanTen = function (num) {
    if (num >= 10) {
        return true
    } else {
        return false
    }
}

console.log(every(arr1, biggerThanTen))