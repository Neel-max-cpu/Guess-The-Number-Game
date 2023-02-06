// <!-- DOM Manipulation
// - If we want our websites to be interactive, we want it to change on the fly
//  - So when the user clicks a button we need to respond to it by changing the content
// - DOM catalogs our web page into individual objects which we can select and manipulate
// -->

//generated a number from 1-20 but since we want not in fraction so floor
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0
//console logging to check for ourself
console.log(secretNumber)
 
 
// Selecting the check button
//why not btn check?- we have given our button 2 classes btn is to identify with different classes
const c = document.querySelector(".check")
// Add event listener to the check button
c.addEventListener("click",()=>{
 
    // fetch the user input from the DOM
    //number that has been given by the user, and we are type casting it to number, since by default it would be string
    let guess = Number(document.querySelector(".guess").value)
    // console.log(guess)
    // handling the cases
    // 1. invalid/no input
   
    if(!guess){
        alert("Enter a valid value!")
    }
 
    // correct guess
    else if(secretNumber === guess){
        //change background color to #60b347
        document.querySelector("body").style.backgroundColor = "#60b347";
       
        // Display the message -> You guessed it right!
        document.querySelector(".message").textContent = "You guessed it right!👍";
        document.querySelector("h1").textContent = "💐YA! You Are A Champ!💐"
 
        // Display the secret number
        document.querySelector(".number").innerHTML = secretNumber;
        //or can write guess
 
        // Check for new high score and display it
        document.querySelector(".highscore").innerHTML = score;
       
       
    }
 
    // guess is less than random number
    else if(secretNumber > guess){
        if(score>0){
        // Display You lost if score goes below 0
            score--;
            document.querySelector(".score").innerHTML = score;
       
        // Otherwise Diplay the message Too Low, Display the score and decrement the score  
            document.querySelector(".message").textContent = "Too Low!"
        }
        
        //here scored has reached zero
        else{
            //message
            document.querySelector(".message").textContent = "YOU LOST!"
            //background color to red
            document.querySelector("body").style.backgroundColor = "#ff0909";
            //change the h1 tage
            document.querySelector("h1").textContent = "💀 Correct Answer Was:"
            //display the correct answer
            document.querySelector(".number").innerHTML = secretNumber;

        }      
    }
 
    // guess greater than random number
    else if(secretNumber < guess){
 
        if(score>0){
            // Display You lost if score goes below 0
            score--;
            document.querySelector(".score").innerHTML = score;
 
            // Otherwise Diplay the message Too High, Display the score and decrement the score  
            document.querySelector(".message").textContent = "Too High!"
        }
        else{
            //message
            document.querySelector(".message").textContent = "YOU LOST!"
            //background color to red
            document.querySelector("body").style.backgroundColor = "#ff0909";
            //change the h1 tage
            document.querySelector("h1").textContent = "💀 Correct Answer:"
            //display the correct answer
            document.querySelector(".number").innerHTML = secretNumber;
        }      
    }
})


const x = document.querySelector(".again")

x.addEventListener("click",()=>{
    location.reload();
} )