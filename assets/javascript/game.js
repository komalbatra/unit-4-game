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
    //Generates a random number between 19 and 120
    
    var wins = 0;

    var losses = 0;

    $("#wins").text(wins);
    $("#loss").text(losses);

    //Function that initializes the next game.
    function initializeGame();
    //Random number generated between 19 and 120
    var targetNumber = Math.floor(Math.random() *(120-19+1)) + 19; 
    $("#guess-number").text(targetNumber);
    

    //Variable for the number assigned to a crystal
    var crysCounterTotal = 0;

    // var crystalType = ["crys1", "crys2", "crys3", "crys4"];

    // for ( var i = 0; i < crystalType.length; i++){
        var randomCrysValue1 = Math.floor(Math.random() * 12) + 1;
        console.log ("Random Crystal Value" + " " + randomCrysValue1)
        $("#crys-img1").attr ("data-crystalvalue", randomCrysValue1);    
    // };
       
    var randomCrysValue2 = Math.floor(Math.random() * 12) + 1;
    console.log ("Random Crystal Value" + " " + randomCrysValue2)
    $("#crys-img2").attr ("data-crystalvalue", randomCrysValue2);


    var randomCrysValue3 = Math.floor(Math.random() * 12) + 1;
    console.log ("Random Crystal Value" + " " + randomCrysValue3)
    $("#crys-img3").attr ("data-crystalvalue", randomCrysValue3);

    var randomCrysValue4 = Math.floor(Math.random() * 12) + 1;
    console.log ("Random Crystal Value" + " " + randomCrysValue4)
    $("#crys-img4").attr ("data-crystalvalue", randomCrysValue4);

    $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        console.log (crystalValue);
                
        crysCounterTotal += crystalValue;
        $("#score").text(crysCounterTotal);

        if (crysCounterTotal === targetNumber){
            wins ++;
            $("#wins").text(wins);
        }

        else if (crysCounterTotal >= targetNumber) {
            losses ++;
            $("#loss").text(losses);
        }

    });

});