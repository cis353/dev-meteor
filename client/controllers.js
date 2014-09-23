PageController = RouteController.extend({
  layoutTemplate: ''
});

BaseController = RouteController.extend({
  layoutTemplate: 'main',
  onBeforeAction: function(){
    console.log('BaseController: onBeforeAction');
	
	
  }
});

RequireAuth = BaseController.extend({
  onBeforeAction: function(){
    //if the user is not authenticated then redirect to home page
    if(_.isNull(Meteor.user())){
      Router.go(Router.path('home'));
    }
  },
  onAfterAction: function(){
  }
});

DomainController = RouteController.extend({
  onBeforeAction: function(){

  },
  onAfterAction: function(){

  },
});

Router.onRun(function(){
  console.log('Router.onRun');
  var thePath = IronLocation.path();
});

//Router configuration
Router.configure({
  //layoutTemplate: 'mainLayout',
  controller: 'DomainController',
  waitOn: function(){
    console.log('Router.configure - waitOn');
    return Meteor.subscribe('records', { 'type': 'app', 'domain': window.location.host });
  },
  onBeforeAction: function(){
    console.log('Router.configure - onBeforeAction');
    this.render('noApp');
  },
  onAfterAction: function(){
    console.log('Router.configure - onAfterAction');
    setTimeout(function(){
      $('#q').focus();
    }, 300);
  },
  action: function(){
    console.log('Router.configure - action');
    if (this.ready()){
      var appRecord = Records.findOne({ 'type': 'app', 'domain': window.location.hostname });
      console.log('app record:');
      console.log(appRecord);
      this.render();
    }else{
      this.render('noApp');
    }
  }
});

/* If user logged in no need to opne login and register page, Redirect to home*/
Router.onBeforeAction(function(){
  if(Meteor.user()){
      setTimeout(function(){
        Router.go('home');
      },500);        
    } 
  }, {only: ['login', 'register', 'forgotPassword']});
