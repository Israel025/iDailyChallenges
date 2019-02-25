
let strArr = ["aqrst", "uraei", "ffooo" ];

function VowelSquare(stringArray){
 	let vowelRegEx = /a|e|i|o|u/gi;
 	let report = "2x2 matrix not found";

	for (let arrayIndex = 0; arrayIndex < stringArray.length-1; arrayIndex++){
  
 	let firstString = stringArray[arrayIndex];
	let secondString = stringArray[arrayIndex+1];

		for (let stringIndex = 0; stringIndex < firstString.length-1; stringIndex ++) {
	if (firstString[stringIndex].match(vowelRegEx)&&
     	firstString[stringIndex+1].match(vowelRegEx)&&
     	secondString[stringIndex].match(vowelRegEx)&&
     	secondString[stringIndex+1].match(vowelRegEx)) {
		report =`${arrayIndex} - ${stringIndex}`;
		arrayIndex = stringArray.length;
		break;
	} else {continue;} 
	} 
} 

	return report;
}

console.log(VowelSquare(strArr) );
