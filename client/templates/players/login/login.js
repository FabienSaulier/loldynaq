/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({

    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    }
    
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
    console.log("onCreated");

});

Template.Login.onRendered(function () {
        console.log("onCreated");

});

Template.Login.onDestroyed(function () {
        console.log("onDestroyed");

});
