/*****************************************************************************/
/* Profil: Event Handlers */
/*****************************************************************************/
Template.Profil.events({
});

/*****************************************************************************/
/* Profil: Helpers */
/*****************************************************************************/
Template.Profil.helpers({
    'userCommunities': function(){
        var coms = Meteor.user().communities().fetch();
        var communitiesNameList = "";
        _.each(coms, function(com){
            communitiesNameList += com.name;
            communitiesNameList += "  ";
        })
        return communitiesNameList;
    }
});

/*****************************************************************************/
/* Profil: Lifecycle Hooks */
/*****************************************************************************/
Template.Profil.onCreated(function () {
    if(!Meteor.user())
        Meteor.go("home");
});

Template.Profil.onRendered(function () {
});

Template.Profil.onDestroyed(function () {
});
