/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
        'submit form': function(event) {
            console.log("coucou");
            event.preventDefault();
            var emailVar = event.target.email.value;
            var passwordVar = event.target.password.value;
            var summonerName = event.target.sumName.value;
            var communityName = event.target.comName.value;
            var server = event.target.server.value;
        
            Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            summonerName:summonerName,
            communityName:communityName,
            server:server
                
            });
            console.log("out");
            
            Router.go('home');
        },
   
   
    'change #server': function(event){
        if($("#sumName").val() && $("#server").val())
            callSummonerByName($("#server").val(), $("#sumName").val());
    },
   
    'focusout #sumName' : function(event){
        var server =  $("#server").val();
        if(!server){
            sAlert.error("server required", {position:'top'});
            return;
        }
        callSummonerByName($("#server").val(), $("#sumName").val());
    }
   
});

function callSummonerByName(server, sumName){
     Meteor.call('callSummonerByName', server, sumName, serverCallBack);
    
}

function serverCallBack(error, result){
    if(error)
        sAlert.error(error, {position:'top'});
    else{
        $("#sumNameValid").show();
        sAlert.success(result, {position:'top'});
    }
    
}

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
$('.ui.dropdown')
  .dropdown()
;
});

Template.Register.onDestroyed(function () {
});
