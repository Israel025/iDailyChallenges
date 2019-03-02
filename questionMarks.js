let strInput = "acc?7??sss?3rr1??????5";

function QuestionsMarks(str) {
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
}

console.log(QuestionsMarks(strInput));