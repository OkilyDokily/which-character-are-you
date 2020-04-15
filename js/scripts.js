var characterTraits ={ 
"temper": ["Jin","Sawyer","Kate","Michael"],
"daddyissues":["Locke","Jack"],
"mommyissues":["Kate"],
"overeating":["Hurley"],
"morerespect":["Charlie","Locke","Michael","Jin"],
"goodtime":["Hurley"],
"leader":["Jack","Kate","Locke"],
"adventure":["Locke"],
"drugabuse": ["Charlie"],
"badboy":["Sawyer"]
};

var Scores =
{
"Jin":0,
"Kate":0,
"Michael":0,
"Jin":0,
"Hurley":0,
"Charlie":0,
"Locke":0,
"Jack":0,
"Sawyer":0
}

function assignWinners(userAnsweredYesToTheseCharacterTraits){
    userAnsweredYesToTheseCharacterTraits.forEach(function(characterTrait){
      characterTraits[characterTrait].forEach(function(character){
        Scores[character]++;
      });
    });
}

function getWinners(){
    var characterArray = Object.keys(Scores);
    var scoresArray = characterArray.map(function(key){
      return Scores[key];
    });
    var highest = Math.max(...scoresArray);
    var winners = [];
    characterArray.forEach(function(character){
      if(Scores[character] === highest){
        winners.push(character)
      }
    });
    return winners;
}

function reset(){
  var characterArray = Object.keys(Scores);
  characterArray.forEach(function(character){
    Scores[character] = 0;
  })
}

$(document).ready(function(){

  $("form").submit(function(e){
    e.preventDefault();
    
    hide();
    reset();
    
    var answeredYes = [];
    $("input:checked").each(function(item){
      if( $(this).val() == "yes"){
        answeredYes.push($(this).attr("name"));
      }
    });
    if (!isValidated()){
      return;
    }


    assignWinners(answeredYes);
    $("div#results").css('display', 'flex');
    getWinners().forEach(function(winner){
      $("div#results h1").show();
      $("#results").append("<img src='img/" + winner.toLowerCase() + ".jpg" + "'" + ">");
      $("#results").append("<p>" + winner + "</p>");
    })
    
    function hide(){
      $("div#results").hide();
      $("div#results img").remove();
      $("div#results p").remove();
    }

    function isValidated(){
      if (answeredYes.length < 2){
        $("div#results").show();
        $("div#results h1").hide();
        $("#results").append("<p class='error'>You need to answer yes to at least two questions.</p>");
        return false;
      }
      else{
        return true;
      }
    }

  });
});