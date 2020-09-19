function stud(nam,city){
    this.name=nam;
    this.city=city;
    this.getdetails=function(){
        console.log('Welcome',this.name,this.city);
    }
}
var stude= new stud('raj','jsk');
console.log(stude);

var stude= new stud('rajesh','jak');
console.log(stude);
stude.getdetails();
//employee details methhod print details from prototypr add mobile and salary and calculate and bonus(pass values)