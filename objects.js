//constructor function and prototype

function Person (name, age, hometown){ //object constructor is a function for initializing new objects. It defines a class called Person and has 3 parameters
  
  this.name = name;
  
  this.age = age;
  
  this.hometown = hometown;
  
}

Person.prototype.whoAreYou = function(){
  
  console.log("My name is " + this.name + ". I am " + this.age + " and I am from " + this.hometown + ".");
  
};

var person1 = new Person("William", 34, "Madrid"); //new keyword creates an instance of the object class

var person2 = new Person("Shelly", 45, "Montana");

person1.whoAreYou();

person2.whoAreYou();


//object literals


var dog = {

          species: "bulldog",
          age: 3,
          color: "brown"
};

var list = function(){

           	for(var prop in dog){
           	console.log(prop);  // "species" "age" "color"
      }
};

list();




var athlete = {

			age: 27,
			height:"six",	
			benchPress:"300 lbs",
			jumpingAbility:"superior"
    
};

var atl = function(){

    		for (var prop in athlete){
     		 console.log(athlete[prop]);//27 "six" "300 lbs" "superior"
    		}
};

atl();


var friends = {

			steve: {
					firstName:"Steve", 
					lastName:"Davis", 
					number:"(213)999-9999",
					address:["5000 colby ave 12", "la", "ca", "90025"]
					},

			bill: {
					firstName:"Bill",
					lastName:"Davis", 
					number:"(213)999-9999",
					address:["5002 colby ave 12", "la", "ca", "90025"]
					}
    
};


var list = function (){

  			for(var prop in friends) { 
  			 console.log(prop); //"steve" "bill"
  	}  
};

list();



var knowledge = {

				programming: "JavaScript",
				markUp: "HTML",
				styling: "CSS",
				frameWorks: "J Query"

};

var knowList = function(){

     for (var prop in knowledge){
       console.log(knowledge[prop]); //"JavaScript" "HTML" "CSS" "J Query"
     }
  
};

knowList();
