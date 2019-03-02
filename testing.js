let strArray = ["aqrst", "ukaei", "ffooo"]


function VowelSquare(stringArray) {
  if (stringArray.length) {
        
    } else {
        
    }
    

  // code goes here  
  return strArr; 
         
}
   
// keep this function call here 
//VowelSquare(readline());                            

let str = "oqewtyiebu";
let strArray = ["aqrst", "ukaei", "ffooo"]

// strArray.forEach(element => {
//     console.log(element.indexOf('e')) ;
// });
//console.log(stage);

function vowelsIndexesGetter(string) {
    let vowelsRegEx = /a|e|i|o|u/gi;
    let vowelsIndexesHolder = [];
    for (let index = 0; index < string.length; index++) {
        string[index].match(vowelsRegEx)? vowelsIndexesHolder.push(index): false;    
    }
    return vowelsIndexesHolder;    
}

let comArr = strArray.map(string => vowelsIndexesGetter(string));


console.log(comArr);

//console.log(vowelsIndexesGetter(str));

// array.forEach(element => {
    
// });
