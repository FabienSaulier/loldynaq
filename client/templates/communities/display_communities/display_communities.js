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
    return Communities.find();
  }

});

/*****************************************************************************/
/* DisplayCommunities: Lifecycle Hooks */
/*****************************************************************************/
Template.DisplayCommunities.onCreated(function () {
});

Template.DisplayCommunities.onRendered(function () {
});

Template.DisplayCommunities.onDestroyed(function () {
});