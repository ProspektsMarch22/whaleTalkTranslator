//The text that will be translated comes here
let input = 'Turpentine and turtles';

// An array with vowels for later comparison
const vowels = ['a', 'e', 'i', 'o', 'u'];

//I will input input's vowels here
let resultArray = [];

//Then there's the magic
input = input.toLowerCase();
for(let i = 0; i < input.length; i++){
  for(let j = 0; j < vowels.length; j++){
    if(input[i] == vowels[j]){
      if(input[i] == 'e' || input[i] == 'u'){
        resultArray.push(input[i]+input[i]);
        break;
      }
      resultArray.push(input[i]);
    }
  }
}

//Return the contents to a string then show it on console
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
