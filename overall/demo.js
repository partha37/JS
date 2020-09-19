        var student={
            name:'padhu',
            age:23,
            hobbies:['games','music'],
            address:{
                city:'vellore'
            }

        };
        //document.write(student);
       // document.write(student.name);
      //  document.write(student.hobbies[0]);
       console.log(student.address.city);
   //     for (const key in student) {
   //       const element = student[key];
   //       console.log(key+" : "+element[key]);        
   //   
   //   }
        for(const vari in student){
            var stud=student[vari];
            if(stud instanceof Array){
                for(const i in stud){
                    console.log('hobby: '+stud[i]);
                }
            }
            else if(typeof stud =='object'){
                for(const key in stud)
                console.log(key+' : '+stud[key]);
            }
            }
    