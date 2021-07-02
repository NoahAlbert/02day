/*
const val1 = 22
const val2 = 3029
function addNumbers(num1,num2){
    return num1 + num2
}

console.log(addNumbers(val1,val2))
console.log(addNumbers(13,7))
*/

/* 
function determineGreaterNum (num1, num2) {
    if (num1 > num2){
        return num1
    }else{
        return num2
    }
}
*/

/*
function determineGreaterNum (num1, num2) {
    if (num1 > num2){
        return num1
    }if(num2 > num1){
        return num2
    }else{
        return 'the numbers are equal'
    }
}

console.log(determineGreaterNum(27,27))
*/

/*
const val1 = 97
function squareNumber(num){
    return num ** 2
}

console.log(squareNumber(val1))
*/

function squareArray(arr){
    for (let i=0; i < arr.length; i++){
        console.log(arr[i] ** 2)
    }
}

function squareArray2(arr){
    let newArr = []
    for (let i=0; i < arr.length; i++){
        newArr.push(arr[i] ** 2)
    }
    return newArr
}

const myarr = [1,2,4,5,7,13,25,15]

console.log(squareArray2(myarr))