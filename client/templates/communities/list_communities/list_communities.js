/*****************************************************************************/
/* ListCommunities: Event Handlers */
/*****************************************************************************/
Template.ListCommunities.events({
});

/*****************************************************************************/
/* ListCommunities: Helpers */
/*****************************************************************************/
Template.ListCommunities.helpers({
  communities: function() {
    return Communities.find();
  }

});

/*****************************************************************************/
/* ListCommunities: Lifecycle Hooks */
/*****************************************************************************/
Template.ListCommunities.onCreated(function () {
});

Template.ListCommunities.onRendered(function () {
});

Template.ListCommunities.onDestroyed(function () {
});
