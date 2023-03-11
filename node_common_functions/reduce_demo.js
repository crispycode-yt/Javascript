let arr = [1,2,3,4,5]

// sum using normal for loop
let sum = 0;
arr.forEach((item)=>{
    sum += item;
})

console.log(sum)

// sum using reduce function for plain list or array of numbers
let sum1 = arr.reduce((total, current, index)=>{
    console.log(index)
    return total + current
}, 0)

console.log(sum1)

// sum using reduce function for array of objects
let arr2 = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 }
]

let sum2 = arr2.reduce((total, current, index)=>{
    let val = current.value
    console.log(index)
    return total + val
}, 0)

console.log(sum2)