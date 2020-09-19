var student={
    name:'padhu',
    age:23,
    hobbies:['games','music'],
    address:{
        city:'vellore'
    }
}
var jsonstring = JSON.stringify(student);
console.log(jsonstring);
var jsonobj= JSON.parse(jsonstring);
console.log(jsonobj);