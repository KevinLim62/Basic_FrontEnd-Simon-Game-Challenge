const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = ["yellow","green","blue"];
let random_Num;
let randomChosenColour;
let buttonID;
let gameLevel;
let pattern_correct = false;
// function Next_Sequence() {
//   for (i = 0; i <= gameLevel; i++) {
//     random_Num = Math.floor(Math.random() * 4);
//
//     randomChosenColour = buttonColours[random_Num];
//
//     gamePattern.push(randomChosenColour);
//
//     $("#" + gamePattern[i]).click();
//     //alert("The current pattern is "+ gamePattern);
//   }
// }
async function test_seq()
{
  for (i = 0; i < 3; i++) {

      $("." + gamePattern[i]).addClass("pressed");
      new Audio('sounds/'+gamePattern[i]+'.mp3').play();
      await setTimeout(()=>{$("." + gamePattern[i]).removeClass("pressed");},1000);

      //$("#" + gamePattern[i]).click();
    }
}

function check_pattern()
{
  $(".btn").click(function() {
    buttonID = this.id;
    //alert("The click button is colour " + buttonID);
    //for (let i in gamePattern)

    if (buttonID == gamePattern[0])
    {
    pattern_correct = true;
    //gamePattern.shift();
    }
    else
    {
    pattern_correct = false;
    }

  });
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
  gameLevel = 0;
  if (input_key.toLowerCase() == "a") {
    $("h1").html("Level " + gameLevel);
    //Next_Sequence();
    test_seq();
    alert("The curent checking pattern is " + gamePattern[0]);

    while (gamePattern.length != 0)
    {
      check_pattern();
      if (pattern_correct)
      {
        gamePattern.shift();
      }
      alert("The curent checking pattern is " + gamePattern[0]);
    }


    if(gamePattern.length === 0)
    {
      gameLevel +=1;
      $("h1").html("Level " + gameLevel);
      //Next_Sequence();
    }
   else {
    $("h1").html("Game Over...");
    new Audio('sounds/wrong.mp3').play();

    gamePattern = [];
    gameLevel = 0;
  }

    // $(".btn").click(function() {
    //   buttonID = this.id;
    //   alert("The click button is colour " + buttonID);
    //   //for (let i in gamePattern)
    //   for (i = 0; i < 3; i++)
    //   {
    //
    //   if (buttonID == gamePattern[0]) {
    //     gamePattern.shift();
    //     if(gamePattern.length === 0)
    //     {
    //       gameLevel +=1;
    //       $("h1").html("Level " + gameLevel);
    //       //Next_Sequence();
    //     }
    //   } else {
    //     $("h1").html("Game Over...");
    //     new Audio('sounds/wrong.mp3').play();
    //
    //     gamePattern = [];
    //     gameLevel = 0;
    //   }
    //
    //   }
    //
    //
    // });
  }

});
