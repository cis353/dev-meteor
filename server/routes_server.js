var version = 1.05;

Router.map(function(){
  this.route('version', {
    where: 'server',
    action: function(){
      this.response.end(version.toString());
    }
  });
  this.route('oauthgoogle', {
    where: 'server',
    action: function(){
      var googleapis = Meteor.require('googleapis');
      var readline = Meteor.require('readline');

      this.response.end('Loaded GoogleAPIs library and ReadLine library just fine.');
    }
  });
  this.route('loaderio', {
    where: 'server',
    path: '/loaderio-d89f13ee3008f1b68361077329e83e86',
    action: function(){
      this.response.end('loaderio-d89f13ee3008f1b68361077329e83e86');
    }
  });
});
