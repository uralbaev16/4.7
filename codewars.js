//1-chi masala
//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
function areYouPlayingBanjo(name) {
    // Implement me
     if (name[0].toLowerCase() === 'r') {
          return `${name} plays banjo`;
      } else {
          return `${name} does not play banjo`;
      }
    return name;
  }
//2chi-masala
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    // your code........
  if(number % 2 === 0){
    return number * 8
  }else{
    return number * 9
  }
}

//3-chi masala
//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
{
    function paperwork(n, m) {
        if (n >= 0 && m >= 0){
            return n * m
        } else {
            return 0
        }
    }  
}

//4-chi masala
//Sum of positive.You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
  return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
  }

  //5-chi masala
  //Given an array of integers your solution should find the smallest integer.
  function findSmallestInt(arr) {
    return Math.min(...arr);
  }