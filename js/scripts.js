var characterTraits ={ 
"temper": ["Jin","Sawyer","Kate","Michael"],
"daddyissues":["Locke","Jack"],
"mommyissues":["Kate"],
"overeating":["Hurley"],
"respect":["Charlie","Locke","Michael","Jin"],
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

function assignWinners(answeredYes){
  var keysArray = Object.keys(answeredYes);
    keysArray.forEach(function(item){
      characterTraits[item].forEach(function(character){
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
    characterArray.forEach(function(item){
      if(Scores[item] === highest){
        winners.push(item)
      }
    });
 
    return winners;
}

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var answeredYes = [];
    $("input:checked").each(function(item){
      if( $(this).val() == "yes"){
        answeredYes.push($(this).attr("name"));
      }
    });
    assignWinners(answeredYes);
    getWinners().forEach(function(winner){
      $("#resultslist").append("<li>" + winner + "</li>")
    })
    

    
  });
});