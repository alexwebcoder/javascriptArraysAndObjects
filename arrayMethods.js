//various arrays and methods. . .pushing, shifting, sorting


var list = ["fruitloops", "cherrios", "rice krispies", "alpha bits, honeycombs"];

list.unshift("frosted flakes");

list.push("raisin bran");

console.log(list.reverse());//["raisin bran", "alpha bits, honeycombs", "rice krispies", "cherrios", "fruitloops", "frosted flakes"]





var numbers = [4, 87, 9, 7, 43, 3, 14, 93];

numbers.sort(function(a, b){
  
  return b - a;

});

console.log(numbers); //[93, 87, 43, 14, 9, 7, 4, 3]

//sorting numbers

var numbers = [56, 76, 4, 33, 23, 32, 1, 87, 456, 34, 588, 46];

console.log(numbers.sort(function(a, b){//[1, 4, 23, 32, 33, 34, 46, 56, 76, 87, 456, 588] function will sort numbers from low to high, if you return b - a, it will sort low to high
  
  return a - b;
  
}));




//scope

var a = 3; //global variable

a = 44;  //new value of global variable a


(function f1(){
  
  	var a = 2; //local variable of function f1
  
    	 (function f2(){
      
      		  var a = 7; //local variable of function f2

      		  console.log(a);//will log 7, console log is in the local scope, so the js engine  searches the local scope for a local variable "a" and finds it in the local scope and returns its value of 7, if  var a = 7 was not in the local scope, the js engine would search f1's local scope and log 2
    })();
  
  
})();

console.log(a);//will log 44, console log is in the global scope, so js engine searches the global scope for a global variable of "a", it finds it in the global scope and returns its value of 44 which is the new value of "a" in the global scope.


//array search


var text = "jkkdjkdllddkkllldpowerhjdndjdkdkdhnmakmpowerhnshndmmsmnnhhdpower"; // letters we are searching through

var name = "power"; //letters we are searching for

var hits = [];  //empty array that will store our search results

for(var i = 0; i < text.length; i ++){ //for loop searches through our text 
  
    if(text[i] === "p"){ // if the first letter is found. . .
    
        for(var j = i; j < name.length + i; j ++){// we declare a new variable (j) to add to i's search by searching  through the name variable
           hits.push(text[j]);//if what we are searching for is found, it gets pushed into the back of the hits array
      
    }

  }
  
}

if(hits === 0){

    console.log("nothing found");
}

else{

    console.log(hits); //["p", "o", "w", "e", "r", "p", "o", "w", "e", "r", "p", "o", "w", "e", "r"]
}