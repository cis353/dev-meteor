Router.map(function(){
  this.route('home', {
    path: '/', // change to / when ready to have this be the home page
    controller: 'BaseController'
  });
});

Template.home_logged_in.records = function(){
  return Records.find({ 'type': 'app' }).fetch();
};

Template.home.rendered = function(){
  console.log('home is here');
  $('#q').focus()
};

Template.home.event_monitors = function(){
  //return EventMonitors.find().fetch();
  return "here are some event monitors."
};

Template.home_logged_in.helpers({
  success: function() {
    if(Session.get('success') == undefined){
      $(".alert").show();
      return null
    }
    else{
      $(".alert").show();
      return Session.get('success');
    }
  }
});
