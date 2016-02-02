/*****************************************************************************/
/* EditCommunity: Event Handlers */
/*****************************************************************************/
Template.EditCommunity.events({
});

/*****************************************************************************/
/* EditCommunity: Helpers */
/*****************************************************************************/
Template.EditCommunity.helpers({
      
    beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete community: "' + doc.name + " " + doc.url + '"?')) {
      this.remove();
      Router.go('communitiesList');
    }
  };
 }
 
});

/*****************************************************************************/
/* EditCommunity: Lifecycle Hooks */
/*****************************************************************************/
Template.EditCommunity.onCreated(function () {
});

Template.EditCommunity.onRendered(function () {
});

Template.EditCommunity.onDestroyed(function () {
});
