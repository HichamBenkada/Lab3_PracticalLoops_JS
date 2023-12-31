//console.log("Loops-and-Iterations: ");
//-------------------------------
console.log('-----------------Part 1: Fizz Buzz:-----------------')
/**
To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
*/

//Loop through all numbers from 1 to 100.
for(let i = 1; i <= 100; i++){
//If a number is divisible by 3, log “Fizz.”
if( i % 3 ===0){
    if(i % 5 === 0){//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
        console.log(i,'Fizz Buzz')
    }
    console.log(i,'Fizz');
}else if(i % 5 ==0){
// If a number is divisible by 5, log “Buzz.”
console.log(i,'Buzz');
}else{//If a number is not divisible by either 3 or 5, log the number.
console.log(i)
}
}
//-------------------------------
console.log('-----------------Part 2: Prime Time:-----------------')
/**
Context: A prime number is any whole number greater than 1 that cannot be evenly divided by any whole number other than itself and 1. 
For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!

Code output:  if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
Be careful! If you set n to a number too large, your loop could take a long time to process.
 */

//Declare an arbitrary number, n.
let n = 5;
//Create a loop that searches for the next prime number, starting at n and incrementing from there.
let primeFound = false;
let k = n;
while(true){// Loop till next prime is found
    if(primeFound == true){
        console.log("The next prime to " + n + " is: ", k);
        break;
    }
    k++;
    for(let i = 2; i < k; i++){
       if(k % i === 0){
        primeFound = false;
        break;
       }else{
        primeFound = true;
       }
    }
}

//console.log('I am out of While loop ...')

//-------------------------------
console.log('-----------------Part 3: Feeling Loopy:-----------------')
/**
 *  (string processing)

Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.

CSV data looks like this:


 */

const CSV_Str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let word = "";
let Cell1 = "";
let Cell2 = "";
let Cell3 = "";
let Cell4 = "";

for (let i = 0; i <= CSV_Str.length; i++) {
  if (CSV_Str[i] === "\n" || i===CSV_Str.length) {
    Cell4 = word; 
    console.log(Cell1, Cell2, Cell3, Cell4);
    word = ""; 
    Cell1 = "";
    Cell2 = ""; 
    Cell3 = "";
    Cell4 = "";
    continue;
  }
  if (CSV_Str[i] != ",") {
      word += CSV_Str[i];
    } else if(Cell1 ===""){
            Cell1 = word; 
            word = ""; 
            continue;
    }else if(Cell2 ===""){
            Cell2 = word; 
            word = ""; 
            continue;
    } else if(Cell3 ===""){
            Cell3 = word; 
            word = ""; 
            continue;
    }
  }

  
console.log("---------Testing The code of Part 3 ------------")
  let Test_Str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
  
  for (let i = 0; i <= Test_Str.length; i++) {
    if (Test_Str[i] === "\n" || i===Test_Str.length) {
      Cell4 = word; 
      console.log(Cell1, Cell2, Cell3, Cell4);
      word = ""; 
      Cell1 = "";
      Cell2 = ""; 
      Cell3 = "";
      Cell4 = "";
      continue;
    }
    if (Test_Str[i] != ",") {
        word += Test_Str[i];
      } else if(Cell1 ===""){
              Cell1 = word; 
              word = ""; 
              continue;
      }else if(Cell2 ===""){
              Cell2 = word; 
              word = ""; 
              continue;
      } else if(Cell3 ===""){
              Cell3 = word; 
              word = ""; 
              continue;
      }
    }