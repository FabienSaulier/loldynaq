Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/login', {
  name: 'login',
  where: 'client'
});

Router.route('/register', {
  name: 'register',
  where: 'client'
});

Router.route('/profil', {
  name: 'profil',
  controller: 'UsersController',
  where: 'client'
});

Router.route('/logout', function(){
        event.preventDefault();
        Meteor.logout();
        Router.go('home');
});

Router.route('/communities/create', {
  name: 'createCommunity',
  controller: 'CommunitiesController',
  action: 'create',
  where: 'client'
});

Router.route('/communities', {
  name: 'listCommunities',
  controller: 'CommunitiesController',
  action: 'list',
  where: 'client'
});



Router.route('/communities/:_id', {
  name: 'viewCommunity',
  controller: 'CommunitiesController',
  action: 'view',
  where: 'client'
});


Router.route('/communities/:_id/edit', {
  name: 'editCommunity',
  controller: 'CommunitiesController',
  action: 'edit',
  where: 'client'
});