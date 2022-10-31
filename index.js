const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userclicked_Pattern = [];
let random_Num;
let randomChosenColour;
let buttonID;
let gameLevel;
let userbutton;

function Next_Sequence()
{
        random_Num = Math.floor(Math.random() * 4);

        randomChosenColour = buttonColours[random_Num];

        gamePattern.push(randomChosenColour);

        currentlevel_Pattern = randomChosenColour;

        $("#"+currentlevel_Pattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        new Audio('sounds/'+currentlevel_Pattern+'.mp3').play();
}

function check_pattern()
{
    let pattern_correct = true;

    $(".btn").click(function() {
      userbutton = this.id;
      userclicked_Pattern.push(buttonID);


      for (let i = 0; i<gamePattern.length; i++)
      {
        if (userclicked_Pattern[i] != gamePattern[i])
        {
          pattern_correct = false;
        }
      }
    });


  return pattern_correct;
}


$(".btn").click(function() {
  buttonID = this.id;
  $("." + buttonID).addClass("pressed");
  switch (buttonID) {
    case "blue":
      new Audio('sounds/blue.mp3').play();
      break;

    case "red":
      new Audio('sounds/red.mp3').play();
      break;

    case "yellow":
      new Audio('sounds/yellow.mp3').play();
      break;

    case "green":
      new Audio('sounds/green.mp3').play();
      break;

    default:
      console.log(buttonID);
  }

  setTimeout(function() {

    $("." + buttonID).removeClass("pressed");

  }, 100);

});

$(document).keypress(function(event) {
  var input_key = event.key;
  gameLevel = 1;
  if (input_key.toLowerCase() == "a") {
    $("h1").html("Level " + gameLevel);
    let result;

    Next_Sequence();

    let pattern_correct = true;

    $(".btn").click(function() {
      userbutton = this.id;

      if(userclicked_Pattern.push(buttonID) && userclicked_Pattern.length == gamePattern.length)
      {
        for (let i = 0; i<userclicked_Pattern.length; i++)
        {
          if (userclicked_Pattern[i] != gamePattern[i])
          {
            pattern_correct = false;
          }
        }

        if(pattern_correct)
        {
            gameLevel ++;
            $("h1").html("Level " + gameLevel);
            userclicked_Pattern = [];

            setTimeout(function() {

            Next_Sequence();

          }, 300);

        }
        else
        {
            $("h1").html("Game Over...");
            new Audio('sounds/wrong.mp3').play();
            gamePattern = [];
            userclicked_Pattern = [];
            gameLevel = 0;
            //$("hidden").css("visibility","visible");
        }
      }
    });


    //let result;
    // if(result)
    // {
    //   gameLevel ++;
    //   $("h1").html("Level " + gameLevel);
    // }
    // else
    // {
    //     $("h1").html("Game Over...");
    //     new Audio('sounds/wrong.mp3').play();
    //     //gamePattern = [];
    //     //userclicked_Pattern = [];
    //     //gameLevel = 0;
    // }

  }

});
