//var highScore = 0
//var scoreEntry;

jQuery("#credits").on("click",function() {
    var message = "created by labeena hanif :)";
      alert(message);
  }
)
jQuery("#help").on("click",function() {
    var message = "if the bird falls and disappears, refresh the page to restart";
    alert(message);
  }
)

jQuery("#instagram").on("click",function() {
    var message = "follow me on instagram @labeenaaa";
    alert(message);
  }
)

jQuery("#scores").on("click",function() {
    var message = "your score is " +score;
    alert(message);
  }
)

jQuery("#bird").on("click",function() {
    var message = "you have found The Bird. you are now initiated. long live the flappy king and long may he flap.";
    alert(message);
  }
)

//function registerScore(score) {
  //if (score > highscore) {
    //highScore = scoreEntry = "<li>" +name+ ":" + score.toString()+ "</li>";
    //var name = prompt("what is your name?");
//  }
//}
