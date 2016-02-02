
Meteor.publish('communities', function () {
  return Communities.find();
});
