//conditional programs

var name = prompt("who are you?");

if (name === "laura" || name === "greg"){
  
    var password = prompt("what's the password?");
}

else {

    alert("wrong name");
}

if (name === "laura" && password === "key"){
  
    alert("welcome laura");

}

else if (name === "greg" && password === "unlock"){
  
    alert ("welcome greg");

}

else {
  
    alert ("wrong");
  
}



switch  (prompt("what's your favorite state?")){
    
        case "Wyoming" :
        console.log ("I love going to Yellowstone when I'm there.");
        break;
      
        case "Missouri" :
        console.log ("Show me where that is.");
        break;
      
        case "Michigan" :
        console.log ("Stay out of that big lake.");
        break;
      
        default:
        console.log ("Yes, we all like that one.");
        break;
}


//fizzbuz 1

for(var i = 1; i <= 100; i ++){ //loops therough numbers 1 to 100
  
    if (i % 15 === 0){
    
      console.log("fizzbuzz"); //logs fizzbuzz for numbers divisible by both 3 and 5
    
  }
  
  else if (i % 3 === 0){
    
      console.log("fizz"); //logs fizz for numbers divisible by 3
    
  }
  
  else if (i % 5 === 0){
    
      console.log("buzz"); //logs buzz for numbers divisible by 5
    
  }
  
  else 
    
      console.log(i); //logs the numbers that don't meet the above conditions
  
}

//fizzbuzz 2

for (var i = 1; i <= 100; i ++){ //loops therough numbers 1 to 100

    var result = ""; //declares a result variable with a value of an empty string
  
    if (i % 3 === 0) //if number is divisible by 3 . . .
        result += "fizz"; //result will equal the result(empty string) + fizz
  
    if (i % 5 === 0) //if number is divisible by 5 . . .
        result += "buzz"; //result will equal the result(empty string) + buzz
  
        console.log(result || i); //logs the  results or the number
}

//chessboard

var size = 8; //tells us how many spaces across the board will be

var board = "#";//tells us what the board will look like

  for(x = 0; x < size; x ++){ //loops through the size(8), x and y are for the length and width

        for(y = 0; y < size; y ++)

          if ((x + y) % 2 === 0){ //finds the even numbers between 1 and 8 (numbers divisible by 2)

              board += " ";//empty string puts an empty space at at every even number
          }

          else {

              board += "#";//pound sign is placed at at every odd number
          }
              board += "\n";//new line is placed at every odd number
  }

    console.log(board); 

/*"# # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
"*/

