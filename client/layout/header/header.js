Template.header.events({
  'click #searchBtn' : function () {
    // template data, if any, is available in 'this'
    //if (typeof console !== 'undefined')
    //  alert("You pressed the button")
    //alert('searching...')
    //console.log(Router.path('search', { q: 'test'}));
    //var searchURL = '';
    //if ($('#q').val() == ''){
    //  searchURL = Router.path('search', { q: '!' });
    //}else{
    var searchURL = Router.path('search', { q: $('#q').val() });
    //}
    Router.go(searchURL);
  },
  'click #loginBtn': function(){
    console.log('logging in...');
    Meteor.loginWithGoogle();
    return 0;
  },
  'click #logoutBtn': function(){
    Meteor.logout();
  },
  'keypress #q': function(evt){
    if (evt.which === 13){
      $('#searchBtn').click();
      $('#q').select();
    }
  },
  'click #logo': function(){
    $('#q').focus();
  }

  //'click #newBtn': function(){
    //alert('You clicked the new button!');
    //Session.set('page', 'home');
    //return 0;
    //$('#content').html(Meteor.render(Template.new));
    //$('#name').focus();
    //Session.set('test', '1234');
    //MySession.set('page', 'new');


    // In your client code: asynchronously send an email
    //Meteor.call('sendEmail',
    //  'heber.allred@gmail.com',
    //  'heber.allred@gmail.com',
    //  'Hello from Meteor!',
    //  'This is a test of Email.send.');
  //  alert('Sending some mail...');
  //}
  //'click #logo': function(){
  //  MySession.set('page', 'home');
  //  //$('#content').html(Meteor.render(Template.home));
  //}
});

//console.log(Test);
Template.header.rendered = function(){

};
