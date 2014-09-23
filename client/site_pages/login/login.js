Router.map(function(){
  this.route('login',{
    //controller: 'BaseController',
    layoutTemplate: "loginLayout"
  });
});


// Router.onBeforeAction(function() {
//     if (!Meteor.user() && this.ready())
//         return this.redirect('/login');
// }, {except: ['login','home','register']});


Template.socialLoginButtons.events({
    'click .fb': function () {
      Meteor.loginWithFacebook();
    },
    'click .googleplus':function(){
      Meteor.loginWithGoogle();
    },
    'click .twitter':function(){
      Meteor.loginWithTwitter();
    }
});


Template.login.rendered = function() {
  $(".alert").hide();
  Session.set('alert', null)
}


Deps.autorun(function() {
  if (Session.get('alert') != null) {
    $(".alert").show();
  }
})



// Logic for login form

Template.login.events({
  "submit #loginForm": function(event, template) {
    event.preventDefault();
    var email = template.find('#login-email').value
        , password = template.find('#login-password').value;

        if(email == "" || password == ""){
          Session.set("alert", "Email or password is blank")
          return
        }

    Meteor.loginWithPassword(email, password, function(err){
      if(err){
          Session.set("alert", err.reason)
      }
      else{
        Session.set("success", "Congrats! You have been signed in into zzBase")
      }
    });
    return false ;
  }
});


Template.login.helpers({
  alert: function() {
    return Session.get('alert');
  }
});

