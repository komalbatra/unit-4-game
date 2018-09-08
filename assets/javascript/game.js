// Generte a random number between 19 and 120
//Assign crystals with random numbers between 1 and 12
//Numbers assigned to crystals should not be visible
//When user clicks on a crystal, the number should display in a box below.
//user will continue to click on teh crystal. 
//The numbers in the box below should add up.
//if the number in the box below, matches the number in the random box, then:
//display "You Won!" and increments Wins score by 1
//otherwise display "You Lost!" and increment Loses score by 1
//when user loses or wins, a new game starts. 
//New random number is generated
//Crystals get new random numbers
//Counter for wins and losses 


$(document).ready(function(){
    //Declaring Variables   
   
    var wins = 0;

    var losses = 0;

    var targetNumber;

    var crysCounterTotal = 0;

    $("#wins").text(wins);
    $("#loss").text(losses);

    //Function that initializes the next game and generates random numbers
function gameBegin () {
    
    var targetNumber = Math.floor(Math.random() *(120-19+1)) + 19; 
    $("#guess-number").text(targetNumber);
   
    var randomCrysValue1 = Math.floor(Math.random() * 12) + 1;
    $("#crys-img1").attr ("data-crystalvalue", randomCrysValue1);    

    var randomCrysValue2 = Math.floor(Math.random() * 12) + 1;
    $("#crys-img2").attr ("data-crystalvalue", randomCrysValue2);

    var randomCrysValue3 = Math.floor(Math.random() * 12) + 1;
    $("#crys-img3").attr ("data-crystalvalue", randomCrysValue3);

    var randomCrysValue4 = Math.floor(Math.random() * 12) + 1;
    $("#crys-img4").attr ("data-crystalvalue", randomCrysValue4);
    }


function playGame (crystalValue) {
    crysCounterTotal += crystalValue;
    $("#score").text(crysCounterTotal);
    console.log ("Counter Total" + "" + crysCounterTotal);
    }

//check if win or loss
function checkResult() {
   if (crysCounterTotal === targetNumber){   
       console.log("crysCounterTotal is" + crysCounterTotal);
       console.log("targetNumber is" + targetNumber);
        wins ++;
        console.log("wins" + wins);
        $("#wins").text(wins);    
        gameBegin(); //initialize game
    } 

    if (crysCounterTotal >= targetNumber){
       console.log("Loss crysCounterTotal is" + crysCounterTotal);
       console.log("Loss targetNumber is" + targetNumber);
        losses ++;
        console.log("Losses" + losses);
        $("#loss").text(losses);
        gameBegin();  // initialize game
    }
    if (crysCounterTotal < targetNumber){
        console.log("Loss crysCounterTotal is" + crysCounterTotal);
       console.log("Loss targetNumber is" + targetNumber);
    }
}


$(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        playGame(crystalValue);    
        checkResult();       
    });

gameBegin();

});

