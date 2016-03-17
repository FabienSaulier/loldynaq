
Meteor.publish('communities', function () {
  return Communities.find();
});

Meteor.publish('allUsers', function () {
  return Meteor.users.find();
});
