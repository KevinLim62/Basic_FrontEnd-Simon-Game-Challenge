const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userclicked_Pattern = [];
let random_Num;
let randomChosenColour;
let buttonID;
let gameLevel;
let restart;
let pattern_correct;

function Next_Sequence()
{
        random_Num = Math.floor(Math.random() * 4);

        randomChosenColour = buttonColours[random_Num];

        gamePattern.push(randomChosenColour);

        currentlevel_Pattern = randomChosenColour;

        $("#"+currentlevel_Pattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        new Audio('sounds/'+currentlevel_Pattern+'.mp3').play();
}

async function Game_reset()
{

  let myPromise = new Promise(function(resolve, reject) {

    $(document).keypress(function(event){
      $(".hidden").css("visibility","hidden");
      $("h1").html("Level " + gameLevel);
      //pattern_correct = true;
      //Next_Sequence();
      resolve(true);


    });

  });

  return await myPromise;
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
  let input_key = event.key;
  gameLevel = 1;
  if (input_key.toLowerCase() == "a" || restart == true) {
    $("h1").html("Level " + gameLevel);
    restart = false;
    let result;
    Next_Sequence();

    pattern_correct = true;
    $(".btn").click(function() {
      userbutton = this.id;

      if(userclicked_Pattern.push(buttonID) && userclicked_Pattern.length == gamePattern.length)
      {
        for (let i in userclicked_Pattern)
        {
          if (userclicked_Pattern[i] != gamePattern[i])
          {
            pattern_correct = false;
            break;
          }
        }

        if(pattern_correct)
        {
            gameLevel ++;
            $("h1").html("Level " + gameLevel);
            userclicked_Pattern = [];

            setTimeout(function() {

            Next_Sequence();

          }, 500);

        }
        else
        {
            $("h1").html("Game Over...");
            new Audio('sounds/wrong.mp3').play();
            gamePattern = [];
            userclicked_Pattern = [];
            gameLevel = 1;
            $(".hidden").css("visibility","visible");
            restart = Game_reset();

        }
      }
    });

  }

});
