//write your code here
//Declare function, set string as parameter
//Initialize two empty string variables, one for upper case one for lowercase
//Initialize a for loop that iterates through the string
//Set a conditional that if a letter is upper case its pushed to the uppercase string and vice versa
//Return the lowercase string
const stripUpperCase = string => {
  let lower = "";
  for(let i of string){
    if(i == i.toLowerCase()){
      lower += i;
    }
  }return lower;
};
console.log(stripUpperCase('Hello!')); // 'ello!'