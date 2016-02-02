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

Router.route('/communities/create', {
  name: 'createCommunity',
  controller: 'CommunitiesController',
  action: 'create',
  where: 'client'
});

Router.route('/communities', {
  name: 'communitiesList',
  controller: 'CommunitiesController',
  action: 'list',
  where: 'client'
});

Router.route('/communities/:_id', {
  name: 'editCommunity',
  controller: 'CommunitiesController',
  action: 'edit',
  where: 'client'
});