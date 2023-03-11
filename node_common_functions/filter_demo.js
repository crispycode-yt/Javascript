const numbers = [1,2,3,4,2,5];

function remove_2(num) {
  return num !== 2;
}

const result = numbers.filter(remove_2);
console.log(numbers)
console.log(result);
