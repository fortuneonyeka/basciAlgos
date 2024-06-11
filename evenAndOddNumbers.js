//Write a method that accepts a parameter and returns all even number below the given number
const givenNum = 10;

function getEvenNumbers(num) {
    const evenNumbers = [];

    //Check for negative input

    if (num <= 0) {
        return -1
    }

    for (let i = 2; i < num; i+=2) {
        if (i % 2 === 0) {
            
        }   evenNumbers.push(i)     
    }
    return evenNumbers
  
}
  
  console.log(getEvenNumbers(givenNum));
