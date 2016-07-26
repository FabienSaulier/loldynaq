/*****************************************************************************/
/* ViewCommunity: Event Handlers */
/*****************************************************************************/
Template.ViewCommunity.events({
    'click .joinCommunityBtn': function(){
        Communities.update({_id : this._id}, {$push: {user_id: Meteor.user()._id}});
    Meteor.users.update(Meteor.userId(), {$push: {"profile.communityId": this._id}});
    
    },
    
    'click .quitCommunityBtn': function(){
        Communities.update({_id : this._id}, {$pull: {user_id: Meteor.user()._id}});
    Meteor.users.update(Meteor.userId(), {$pull: {"profile.communityId": this._id}});

    
    },
    
    'click .refresh': function(){
        // this refers to the data context of the child template
        console.log(this.summonerId);
        console.log(this.a);
        Meteor.call('getSummonerLeague', Meteor.user().profile.server, this.summonerId, this.userId, serverCallBack);
        
    }
    
});

function serverCallBack(error, result){
    if(error){
        alert(error);
        console.log(error);
    }
    else{
        console.log(result);
    }
    
}


Meteor.subscribe("allUsers");

/*****************************************************************************/
/* ViewCommunity: Helpers */
/*****************************************************************************/
Template.ViewCommunity.helpers({
    'users': function(){
        return Communities.findOne({_id : this._id}).users();
    },
    
    'isPlayerInCommunity': function(){
        var usersIdCursor = Communities.findOne({_id : this._id}).usersId().fetch();
        var usersId = []
        _.each(usersIdCursor, function(element, index, list) {
            usersId.push(element._id);
        })
        return _.contains(usersId, Meteor.userId());
    },
    
    'isCurrentUser': function(userId){
        return userId === Meteor.userId();
    }, 
    
    'display' : function(object){
        return JSON.stringify(object);
    }

});

Template.row.helpers({
    'tierPicture': function(tier){
        switch(tier) {
            case 'BRONZE':
                return "/icons/bronze.png";
            case 'SILVER':
                return "/icons/silver.png";
            case 'GOLD':
                return "/icons/gold.png";
            case 'PLATINUM':
                return "/icons/platinum.png";     
            case 'DIAMOND':
                return "/icons/diamond.png";
            case 'MASTER':
                return "/icons/master.png"; 
            case 'CHALLENGER':
                return "/icons/challenger.png";    
            default:
                return "/icons/provisional.png";   
        }
    }, 
    
    'opggUrlProfil': function(server, summonerName){
        var urlOpgg = "http://"+server+".op.gg/summoner/userName="+summonerName;
        return urlOpgg;
    },
    
    'tierClean': function(tier){
        // s is the global to call underscore.string methods
        return s(tier).capitalize(true).value();
    }
    
    
});


/*****************************************************************************/
/* ViewCommunity: Lifecycle Hooks */
/*****************************************************************************/
Template.ViewCommunity.onCreated(function () {
});

Template.ViewCommunity.onRendered(function () {
});

Template.ViewCommunity.onDestroyed(function () {
});
