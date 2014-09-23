Router.map(function(){
  this.route('pages',{
	//controller: 'BaseController',
	layoutTemplate: "userLayout"
  });
});

Template.pages.events({
	
	'click #add-page': function(event,template){
		window.location='/addpage';
		return false;
	}

});


