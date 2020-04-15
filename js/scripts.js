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


$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var answeredYes = [];
    $("input:checked").each(function(item){
      if( $(this).val() == "yes"){
        answeredYes.push($(this).attr("name"));
      }
    });
    var keysArray = Object.keys(characterTraits);
    keysArray.forEach(function(item){
      characterTraits[item].forEach(function(character){
        Scores[character]++;
      })
    })

    var scoresArray = keysArray.map(function(key){
      return Score[key];
    });
    var highest = Math.max(...scoresArray);
    var winners;
    keysArray.forEach(function(item){
      if(Scores[item]){
        winners.push(item)
      }
    });
  });
});