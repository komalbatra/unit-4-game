// Javascript file for HOMEWORK #4 Crystals Collector Game.

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
        
        crysCounterTotal = 0;
        
        // Target Randowm number 
        targetNumber = Math.floor(Math.random() *(120-19+1)) + 19; 
        $("#guess-number").text(targetNumber);
                
        // Random number generation for each of the 4 crystals
        var randomCrysValue1 = Math.floor(Math.random() * 12) + 1;
        $("#crys-img1").attr ("data-crystalvalue", randomCrysValue1);    
               
        var randomCrysValue2 = Math.floor(Math.random() * 12) + 1;
        $("#crys-img2").attr ("data-crystalvalue", randomCrysValue2);
       
        var randomCrysValue3 = Math.floor(Math.random() * 12) + 1;
        $("#crys-img3").attr ("data-crystalvalue", randomCrysValue3);
        
        var randomCrysValue4 = Math.floor(Math.random() * 12) + 1;
        $("#crys-img4").attr ("data-crystalvalue", randomCrysValue4);
        }


        // Function that adds crystal values
    function playGame (crystalValue) {
        crysCounterTotal += crystalValue;
        $("#score").text(crysCounterTotal);
        }

    //function checks if win or loss
    function checkResult() {
        if (crysCounterTotal > targetNumber)
        {
            $("#announce").text("You Lost"); 
            losses ++;
            $("#loss").text(losses);
            gameBegin();  // initialize game
        }
        else if (crysCounterTotal === targetNumber)
        {   
            $("#announce").text("You Won"); 
            wins ++;
            $("#wins").text(wins);    
            gameBegin(); //initialize game
        } 
        else if (crysCounterTotal < targetNumber)
        {
            $("#announce").text(""); 
        }
    }
    // On Click event   
    $(".crystal-image").on("click", function() 
        {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            playGame(crystalValue);    
            checkResult();
           });
    gameBegin();
});

