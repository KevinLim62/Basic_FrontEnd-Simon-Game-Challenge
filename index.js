const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userclicked_Pattern = [];
let gameLevel;
let restart = false;
let first_scan = true;
let pattern_correct = 0;

function Next_Sequence()
{

          let random_Num = Math.floor(Math.random() * 4);

          let randomChosenColour = buttonColours[random_Num];

          gamePattern.push(randomChosenColour);

          currentlevel_Pattern = randomChosenColour;

          $("#"+currentlevel_Pattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
          new Audio('sounds/'+currentlevel_Pattern+'.mp3').play();
}

function Game_Reset()
{
    restart = true;

      $(document).keypress(function(event){
        $(".hidden").css("visibility","hidden");
      });
}

//Event listener
//checking on which buttons that user clicks
//Determine the sequence pattern with userclicked pattern
$(".btn").click(function() {
  let buttonID = this.id;
  pattern_correct = 0;

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
  }

  setTimeout(function() {

    $("." + buttonID).removeClass("pressed");

  }, 100);


  if(userclicked_Pattern.push(buttonID) && userclicked_Pattern.length == gamePattern.length)
  {
    for (let i in userclicked_Pattern)
    {
      if (userclicked_Pattern[i] != gamePattern[i])
      {
        pattern_correct = 2;
        break;
      }
      else
      {
        pattern_correct = 1;
      }
    }

    switch(pattern_correct)
    {
        case 1:
                  gameLevel ++;
                  $("h1").html("Level " + gameLevel);
                  userclicked_Pattern = [];

                  setTimeout(function() {
                    Next_Sequence();
                  }, 500);

                  break;

        case 2:
                  gamePattern = [];
                  userclicked_Pattern = [];

                  $("h1").html("Game Over...");
                  new Audio('sounds/wrong.mp3').play();
                  $(".hidden").css("visibility","visible");
                  Game_Reset();

                  break;

        default:
    }
  }
});


$(document).keypress(function(event) {
  let input_key = event.key;

  if (input_key.toLowerCase() == "a" && first_scan == true)
  {
    first_scan = false;

    gameLevel = 1;
    $("h1").html("Level " + gameLevel);

    Next_Sequence();
  }

  if(restart == true)
  {
    restart = false;

    gameLevel = 1;
    $("h1").html("Level " + gameLevel);

    Next_Sequence();
  }
});
