/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({

  'checkSummonerExist': function(server, summonerName){
    
    server = server.toLowerCase();
    var res = HTTP.get("https://euw.api.pvp.net/api/lol/"+server+"/v1.4/summoner/by-name/"+summonerName+"?api_key=c8d0d47a-03ad-4fd0-a595-004a35bab096");
  
    console.log(res.content);
    return res.content;
  },
  
  'getSummonerInfo': function(server, summonerId){
    
    server = server.toLowerCase();
    var result = HTTP.get("https://euw.api.pvp.net/api/lol/"+server+"/v2.5/league/by-summoner/"+summonerId+"/entry?api_key=c8d0d47a-03ad-4fd0-a595-004a35bab096");
  
  var obj = JSON.parse(result.content)

    var leagueData = obj[summonerId.toString()][0].entries[0];


    if(Meteor.userId()){
      
      Meteor.users.update(Meteor.userId(), {$set : { "profile.soloQ" : leagueData }});

    }

  console.log(Meteor.user());

    return result;
    
  }
});

