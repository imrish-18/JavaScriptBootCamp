// var Person={
//     name:'rish',
//     yearOfBirth:1997,
//     job:'developer'
// }

// var rish=function(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job
//     // this.calculateAge=function()
//     // {
//     //     console.log(2020-this.yearOfBirth)   
//     // }
   
// }

// rish.prototype.calculateAge=function(){
    
//         console.log(2020-this.yearOfBirth)
//     }

// console.log(Person)
// var Per=new rish('im',1997,'dev')
// var Per1=new rish('im',1996,'dev')
// var Per2=new rish('im',1998,'dev')
// Per2.calculateAge()
// Per1.calculateAge()
// Per.calculateAge()


///Object.create

// var personProto={
//     calculateAge:function(){
//         console.log(2020-this.yearOfBirth)
//     }
// }
// var john=Object.create(personProto)

// // function cloursers

// function retirement(retirementAge)
// {
//     let a='years left until retirement'
//     return function(yearOfBirth)
//     {
//         let age=2020-yearOfBirth
//         console.log(retirementAge-age+a)
//     }
// }


// var retirementInd=retirement(70)
// //console.log(retirementInd)// return annonymous function
// retirementInd(1997)
// retirement(67)(1998)


// bind call apply function
var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  console.log(person.fullName.call(person1));  // Will return "John Doe"

console.log(person.fullName.call(person2));
  
// bind function
//object geeks1 
var geeks1 = { 
    name : "ABC", 
    article: "C++"
    } 
    //object geeks2 
      var geeks2 = { 
    name : "CDE", 
    article: "JAVA"
    } 
        
      //object geeks3 
      var geeks3 = { 
    name : "IJK", 
    article: "C#"
    } 
      
    function printVal(){ 
        console.log(this.name+" contributes about "+this.article); 
       } 
            
      var printFunc2= printVal.bind(geeks1); 
       //using bind()  
       // bind() takes the object "geeks1" as parameter// 
      printFunc2(); 
        
      var printFunc3= printVal.bind(geeks2); 
      printFunc3(); 
        
      var printFunc4= printVal.bind(geeks3); 
      printFunc4(); 
      //uniquely defines each objects 