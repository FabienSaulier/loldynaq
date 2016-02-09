/*****************************************************************************/
/* DisplayCommunities: Event Handlers */
/*****************************************************************************/
Template.DisplayCommunities.events({
});

/*****************************************************************************/
/* DisplayCommunities: Helpers */
/*****************************************************************************/
Template.DisplayCommunities.helpers({
  communities: function() {
          console.log("get coomunities");

    return Communities.find();
  }

});

/*****************************************************************************/
/* DisplayCommunities: Lifecycle Hooks */
/*****************************************************************************/
Template.DisplayCommunities.onCreated(function () {
    console.log("gogo");
});

Template.DisplayCommunities.onRendered(function () {
});

Template.DisplayCommunities.onDestroyed(function () {
});