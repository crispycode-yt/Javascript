const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

// map using separate function
function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}

let data = persons.map(getFullName);
console.log(persons)
console.log(data)

// map using direct function
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr)

// map using arrow function
const numbers2 = [4, 9, 16, 25];
const newArr2 = numbers2.map((item)=>{
  return Math.sqrt(item)
})
console.log(newArr2)