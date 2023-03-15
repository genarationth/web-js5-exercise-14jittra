  // – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.

const xValue = x =>{
    while (x > 0) {
      console.log(x);
      x -= 0.5;
    }
  }
  xValue(15)


  // - Print all the odd numbers between 1 - 100.
function oddNumber(oddNumber){
    let i = 0
    while (i <= oddNumber){
      if (i % 2 !== 0){
        console.log(i)
      }
      i++
    }
  }
  oddNumber(100)

// - Write a method with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
function numberinBracket(Number){
    let i = 1
    while (i <= Number){
   console.log(`[${i}]`)
       i++;
      
   }
    }
    numberinBracket(6)
//     - Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
const firstNpositive = (n) =>{
    let i = 0;
    let sum = 0;
    while (i < n){
      i ++;
      sum += i;
    }
    console.log(sum);
  }
  firstNpositive(5);
 