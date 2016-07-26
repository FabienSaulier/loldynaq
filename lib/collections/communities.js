Communities = new Mongo.Collection('communities');


Communities.helpers({
  users: function() {
    return Meteor.users.find({_id :  { $in: this.user_id}});
  },
  
  usersId: function(){
    return Meteor.users.find({_id :  { $in: this.user_id}}, {fields:{_id:1}});
  }
});

if (Meteor.isServer) {
  Communities.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

}

  Communities.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });


Communities.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "name",
    max: 100
  },
  url: {
    type: String,
    label: "url",
    max: 100
  },
  picture: {
    type: String,
    label: "picture"
  },
  user_id: {
    type: [String]
  }
}));