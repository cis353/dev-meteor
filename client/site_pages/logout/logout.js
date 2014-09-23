Router.map(function(){
  //Logout
  this.route('logout', {
    path: '/logout',
    action: function(){
      Meteor.logout();
      Router.go(Router.path('home'));
    }
  });
});