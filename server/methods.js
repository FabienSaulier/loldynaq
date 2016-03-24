/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({


//TODO check si les info server et summonerName sont bien remplis, sinon => throw error.

  'checkSummonerExist': function(server, summonerName){
    
    server = server.toLowerCase();
    var res = HTTP.get("https://euw.api.pvp.net/api/lol/"+server+"/v1.4/summoner/by-name/"+summonerName+"?api_key=c8d0d47a-03ad-4fd0-a595-004a35bab096");
  
    console.log(res.content);
    return res.content;
  },
  
  'getSummonerLeague': function(server, summonerId, userId){
    
    server = server.toLowerCase();
    try{
      var url = "https://euw.api.pvp.net/api/lol/"+server+"/v2.5/league/by-summoner/"+summonerId+"/entry?api_key=c8d0d47a-03ad-4fd0-a595-004a35bab096";
      var result = HTTP.get(url);
    } catch (e){
      
      //TODO check le statut si 404 etc. attention! l'objet est une surcharge meteor. c'est pas le son pur reçu.
      console.log(e);
      return;
    }

    var content = (JSON.parse(result.content))[summonerId.toString()][0];
    
    var leagueData = content.entries[0];
    var tier = content.tier;
    var leagueName = content.name;
    leagueData.tier = tier;
    leagueData.name = leagueName;

    if(userId){
      
      Meteor.users.update(userId, {$set : { "profile.soloQ" : leagueData }});

    }


    return result;
    
  }
});

