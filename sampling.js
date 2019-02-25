let strArray = ["aqrst", "ukaei", "ffooo"]


function VowelSquare(stringArray) {
    let responder = "2x2 Vowels not found";

    if (stringArray.length < 2) {
        responder = "2x2 Vowels not found";        
    }
    else{
        function vowelsIndexesGetter(string) {
            let vowelsRegEx = /a|e|i|o|u/gi;
            let vowelsIndexesHolder = [];
            for (let index = 0; index < string.length; index++) {
                string[index].match(vowelsRegEx)? vowelsIndexesHolder.push(index): false;    
            }
            return vowelsIndexesHolder;    
        }

        let vowelsIndexer = stringArray.map(string => vowelsIndexesGetter(string));

        if (vowelsIndexer.length < 2) {
            responder = "2x2 Vowels not found";            
        }else{
            for (let index = 0; index < vowelsIndexer.length; index++) {
                if (stringArray[index].length < 2 || (index+1)=== stringArray.length) {
                    continue;
                    
                } else {
                    let holder1 = [stringArray[index]];
                    let holder2 = [stringArray[index+1]];
                    
                }            
            }     

        }   
    }
    return responder;         
}
   
function compare(stringArray) {
    for (let index = 0; index < arrys.length; index++) {
        if (index+1 !== arrys.length) {
            arrys[index][index]
            
        } else {
            
        }
        const element = array[index];
        
    }
    
}

function vowelsIndexesGetter(string) {
    let vowelsRegEx = /a|e|i|o|u/gi;
    let vowelsIndexesHolder = [];
    for (let index = 0; index < string.length; index++) {
        string[index].match(vowelsRegEx)? vowelsIndexesHolder.push(index): false;    
    }
    return vowelsIndexesHolder;    
}
let comArr = strArray.map(string => vowelsIndexesGetter(string));

function compare(stringArray) {
    for (let index = 0; index < arrys.length; index++) {
        if (index+1 !== arrys.length) {
            arrys[index][index]
            
        } else {
            
        }
        const element = array[index];
        
    }
    
}
