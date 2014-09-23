Router.map(function(){
  this.route('addpage',{
	//controller: 'BaseController',
	layoutTemplate: "userLayout"
  });
});

Template.addpage.rendered = function(){
	/*$('.user-container').attr('style','width:100%');
	$('.user-sidebar').hide();*/
};

Template.addpage.events({
	
	

});

