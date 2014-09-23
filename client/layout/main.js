Deps.autorun(function(){
  Meteor.subscribe('results', Session.get('search'));                 //calculated results from the search
});

Template.main.events({
  'keyup #q': function(evt){
    //Session.set('test', $('#q').val());
  }
});

Router.map(function(){
  //setup the 404 page for if the path doesn't match a specific route
  // this.route('login', {path: '/'});
  this.route('notFound', { path: '*' });
});




