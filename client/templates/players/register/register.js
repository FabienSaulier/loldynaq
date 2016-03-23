/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
        'submit form': function(event) {
            
            console.log(event.target.sumId.value);
            if(event.target.sumId.value === ""){
                console.log("cancel: pas d'id");
                return;
            }
            event.preventDefault();
            var emailVar = event.target.email.value;
            var passwordVar = event.target.password.value;
            var summonerName = event.target.sumName.value;
            var communityName = event.target.comName.value;
            var server = event.target.server.value;
            var summonerId = event.target.sumId.value;
        
            Accounts.createUser({
                email: emailVar,
                password: passwordVar,
                summonerName:summonerName,
                communityName:communityName,
                server:server,
                summonerId:summonerId
            });

            Router.go('home');
        },
   
   
    'change #server': function(event){
        if($("#sumName").val() && $("#server").val())
            checkSummonerExist($("#server").val(), $("#sumName").val());
    },
   
    'focusout #sumName' : function(event){
        var server =  $("#server").val();
        if(!server){
            sAlert.error("server required", {position:'top'});
            return;
        }
        checkSummonerExist($("#server").val(), $("#sumName").val());
    }
   
});

function checkSummonerExist(server, sumName){
     Meteor.call('checkSummonerExist', server, sumName, serverCallBack);
    
}

function serverCallBack(error, result){
    if(error)
        sAlert.error(error, {position:'top'});
    else{
        $("#sumNameValid").show();
        sAlert.success(result, {position:'top'});
        var riotData = JSON.parse(result);
        var sumName = $("#sumName").val().toLowerCase();
        console.log(riotData);
        console.log(sumName);
        console.log(riotData[sumName].id);
        
        $('input[name="sumId"]').val(riotData[sumName].id);

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
