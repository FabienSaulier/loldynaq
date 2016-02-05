/*****************************************************************************/
/* LoginElement: Event Handlers */
/*****************************************************************************/
Template.LoginElement.events({
    
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('home');
    }

});

/*****************************************************************************/
/* LoginElement: Helpers */
/*****************************************************************************/
Template.LoginElement.helpers({
});