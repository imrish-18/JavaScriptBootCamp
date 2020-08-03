// let arr=[]
// alert('enter the values in array')
// for(let i=0;i<5;i++)
// arr[i]=prompt('enter the values in array')
// arr.forEach(n=>console.log(n))


// let  Ob={
//     firstName:'rish',
//     secondName:'sharma',
//     family:['ri','sh']
// }
// console.log(Ob)


/// hoisting in js
calculateAge(197)
function calculateAge(years)
{
    console.log(2020-years)
}
 
//retirement(1956)
// Uncaught TypeError: retirement is not a function
var retirement=function(year)
{
    console.log(65-(2020-year))
}
console.log(age)//undefined
var age=28
console.log(age)

// this keyword

//console.log(this) // points to window object

let rish={
    name:'rish',
    yearOfbirth:1997,
    calculateAge:function()
    {
        console.log(this)

    }
}

rish.calculateAge()