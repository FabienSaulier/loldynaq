/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = event.target.email.value;
            var passwordVar = event.target.password.value;
            var summonerName = event.target.sumName.value;
            var communityName = event.target.comName.value;
            var server = event.target.server.value;
        
        
            console.log("Form submitted.");
            
            Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            summonerName:summonerName,
            communityName:communityName,
            server:server
                
            });
            
            Router.go('home');


        }
});

/*****************************************************************************/
/* Register: Helpers */
/*****************************************************************************/
Template.Register.helpers({
});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.onCreated(function () {
    if(Meteor.user())
        Router.go('home');
});

Template.Register.onRendered(function () {
    $('select').material_select();
});

Template.Register.onDestroyed(function () {
});
