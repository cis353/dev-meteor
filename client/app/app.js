AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

Router.map(function(){
  this.route('app', {
    waitOn: function(){
      console.log('app: waitOn');
      return Meteor.subscribe('records', { 'type': 'app', 'domain': window.location.hostname });
    },
    path: 'app/:app',
    controller: 'AppController',
    data: function(){
      console.log('app: data');
      //console.log(Records.find({ 'type': 'app', 'domain': window.location.host }));

      if (this.ready()){
        console.log('app: data ready');
        var appRecord = Records.findOne({ 'type': 'app', 'name': window.location.hostname});
        if (appRecord){
          console.log('app: record found');
          return {
            app_id: appRecord._id
          }
        }else{
          this.render('invalidApp');
        }
      }
    }
  });
});

Template.appLayout.editor = function(){
  if (Session.get('mode') == 'edit'){
    return Template.editor;
  }else{
    return null;
  }
};

Template.app.appLayout = function(){
  if (Session.get('appLayout')){
    console.log('appLayout: ' + Session.get('appLayout'));
    return Template[Session.get('appLayout')];
  }else{
    console.log('appLayout');
    return null;  //no layout specified
  }
};

Template.invalidApp.domainName = function(){
  return window.location.hostname;
}