let strInput = "acc?7??sss?3rr1??????5";

function questionMark(str) {
    //let response = false
    let holder = [];
    const regEx = /\?/g;
    
    for (let strIndex = 0; strIndex < str.length; strIndex++) {
        if (!isNaN(str[strIndex])) {
            holder.push(strIndex);         
        }
    } 
    
    if (holder.length > 1) {
        for (let j = 0; j < holder.length-1; j++) {
            if (parseInt(str[holder[j]]) + parseInt(str[holder[j+1]]) === 10 && 
                str.slice(holder[j], holder[j+1]+1).match(regEx).length === 3 ) {
                return true;            
            }        
        } 
       return false;
    } 
    else {
        return false;
    }
    console.log(holder);
    //return response;
}

console.log(questionMark(strInput));

// if (isNaN("9")) {
//     console.log("Not a Number");    
// }else{console.log("it's a Number");  }

// let val = 5;
// console.log(val.toString())
// console.log(isNaN("9"))

// let starts = "computer";
// console.log(starts.slice(-2, ))

const regEx = /\?/g;
let oth = "7k??k?h3"
console.log((oth).match(regEx).length)

let ind= [0, 2, 4];
let arr = [11, 10, 9, 20, 30, 25, 15, 5];
console.log(arr[ind[0]] + arr[ind[1]] === 23)