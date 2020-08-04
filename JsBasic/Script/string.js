let firstName='rish'
let lastName='sharma'
const yearOfBirth=1997


function calculAge(year)
{
    return 2020-year
}
// ES5

console.log('this is '+firstName+' '+lastName+' '+'he was born in '+' '+yearOfBirth )

// ES6
console.log(`this is ${firstName} ${lastName} he was born in ${yearOfBirth} and he is ${calculAge(yearOfBirth)} old` )