//function declaration
function arraySum(array){
    if (!Array.isArray(array)){
        throw new TypeError('Expected an array, but got ' + typeof(array) + '.');
    }
    let sum = 0;
    array.forEach((index) => {sum += parseInt(index);});
    return sum;
}

//sample array and other datatypes declaration
let sampleList = [2, 4, 1, "5", "2", 6];
let str = "This is a test";
let obj = {One: 1, Two:2, Ten:10}
let int = 20;

//function call
console.log(arraySum(sampleList));