  //function that returns the first carachter of the string

function firstLetter(str) { 
     return str[0]; 
}
console.log(firstLetter("Hello"))
 
// function that returns the last caracther of a string

function lastLetter(str) { 
    return str[str.length-1] 
} 
console.log(lastLetter("Hello"))  

//   function that takes a string and a number, and returns the character at the position represented by the number.
 
 function myFunction(str,result) {
     
     return str.charAt(result)
 } 
  console.log(myFunction("hello",4)) 
  
  
 // function that adds two numbers 
 
function twoNumbersSum(a,b)  {  
    return a+b 
}  
    console.log(twoNumbersSum(1,15)); 
      
// function that multiplies numbers  
 
 function multiply (a,b) { 
          return a * b 
}
console.log(multiply(4,12));  
  
 // function that returns the sum, difference, product & ratio 
 
 function operator (a, b, str) {
     
     if (str === "add") {
        return a+b  
     }
     else if  (str === "substract") {
        return  a-b
     } 
     if (str === "mult") {
     return  a * b
     } 
     if (str ==="div") { 
         return a / b
     } 
     else { 
         return 0  
     }    
     
 };
 console.log(operator(21,7, "div"))



     