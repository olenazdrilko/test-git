var Array1 = [1, 2, 3, 4];
var Array2 = ["a", "b", "c"];
function printReverse(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
 
console.log(printReverse(Array1));
console.log(printReverse(Array2));

var numArr = [1, 1, 1, 1];
var numArr2 = [2, 1, 1, 1];
var numArr3 = ["a", "b", "p"];
var numArr4 = ["b", "b", "b"];;
function isUniform(numArr) {
  var first = numArr[0];
    for (var i = 1; i < numArr.length; i++) {
      if (numArr[i] !== first) {
        return false;
      }
    }
  return true;
}

console.log(isUniform(numArr));
console.log(isUniform(numArr2));
console.log(isUniform(numArr3));
console.log(isUniform(numArr4));

function sumArray(input){
             
  if (toString.call(input) !== "[object Array]")
    return false;
       
      var total =  0;
        for(var i=0;i<input.length;i++) {                  
            if(isNaN(input[i])){
            continue;
            }
            total += Number(input[i]);
          }
        return total;
        }
 console.log(sumArray([1, 2, 3]));
 console.log(sumArray([10, 3, 10, 4]));
 console.log(sumArray([-5, 100]));
 
const number1 = [1, 2, 3];
const number2 = [10, 3, 10, 4];
const number3 = [-5, 100];

console.log(Math.max(...number1));
console.log(Math.max(...number2));
console.log(Math.max(...number3));