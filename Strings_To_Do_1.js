// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

// function removeBlanks(str){
//     var newStr = str.split(" ").join("");
//     return newStr;
// }

// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

// Here is the explanation for the code above:
// 1. We are creating a function named removeBlanks that takes a string as a parameter
// 2. We are declaring a variable named newStr that holds the value of the string with the spaces removed
// 3. We are returning the newStr

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// function getDigits(str){
//     var newStr = str.split("");
//     var num = "";
//     for(var i = 0; i < newStr.length; i++){
//         if(!isNaN(newStr[i])){
//             num += newStr[i];
//         }
//     }
//     return Number(num);
// }

// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

//  Here is the explanation for the code above:
// 1. We're creating a function that takes in a string as a parameter.
// 2. We're then creating a variable called newStr and assigning it the value of the parameter split up into an array of characters.
// 3. We're then creating a variable called num and assigning it the value of an empty string.
// 4. We're then creating a for loop that starts at 0 and goes up to the length of newStr.
// 5. Inside the for loop, we're checking to see if the current character is a number or not.
// 6. If it is, then we're adding it to the end of the num variable.
// 7. Once the for loop is finished, we're returning the num variable after converting it to a number.
// 8. Finally, we're calling the function and passing in the string "0s1a3y5w7h9a2t4?6!8?0" as an argument.
// 9. This will return the number 1357924680.

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// function acronyms(str){
//     var newStr = str.split(" ");
//     var acronym = "";
//     for(var i = 0; i < newStr.length; i++){
//         acronym += newStr[i][0].toUpperCase();
//     }
//     return acronym;
// }

// console.log(acronyms("Live from New York, it's Saturday Night!"));

// Here is the explanation for the code above:
// 1. Define a function that takes in a string as an argument
// 2. Split the string into an array of strings, with each string being a word of the original string
// 3. Define a variable that will hold the new acronym
// 4. Loop through the array of strings
// 5. Concatenate the first letter of each string in the array to the variable that holds the acronym
// 6. Return the acronym

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// function countNonSpaces(str){
//     var newStr = str.split(" ").join("");
//     return newStr.length;
// }

// console.log(countNonSpaces("Honey pie, you are driving me crazy"));

// Here is the explanation for the code above:
// 1. We declare a function called countNonSpaces that takes in a string.
// 2. We declare a variable called newStr and set it equal to an empty string.
// 3. We use the split method on the string to separate each word and store it in an array. We then use the join method on the array to join each word together without any spaces.
// 4. We return the length of the new string.

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// function removeShorterStrings(arr, val){
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i].length >= val){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));

// Here is the explanation for the code above:
// 1. Declare a function named removeShorterStrings with two parameters, arr and val
// 2. Declare a variable named newArr with an empty array as its value.
// 3. Use for loop to iterate through the arr array.
// 4. Use if statement to check if the length of the current iteration of the arr array is greater than or equal to the value of the val parameter.
// 5. If true, push the value of the current iteration of the arr array to the newArr array.
// 6. Return the newArr array. 