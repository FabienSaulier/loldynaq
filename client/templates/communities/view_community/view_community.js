/*****************************************************************************/
/* ViewCommunity: Event Handlers */
/*****************************************************************************/
Template.ViewCommunity.events({
    'click .joinCommunityBtn': function(){
        Communities.update({_id : this._id}, {$push: {user_id: Meteor.user()._id}});
    },
    
    'click .refresh': function(){
        console.log("refresh user");
    }
    
});


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
