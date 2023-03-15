// // Exercise #2
// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *
for (let i = 1; i <= 5; i ++){
    let star = ''
    for (let j = 1; j <= i; j ++){
      star += '*'
    }
    console.log(star);
  }