/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({

  'callSummonerByName': function(server, summonerName){
    
    var server = server.toLowerCase();
    var res = HTTP.get("https://euw.api.pvp.net/api/lol/"+server+"/v1.4/summoner/by-name/"+summonerName+"?api_key=c8d0d47a-03ad-4fd0-a595-004a35bab096");
  
    console.log(res.content);
    return res.content;
  }
});

