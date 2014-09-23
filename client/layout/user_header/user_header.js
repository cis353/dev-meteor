//console.log(Test);
Template.user_header.rendered = function(){
	
};
Template.user_header.events({
	
	'click .my-account': function(event,template){
		alert(template.$(event.currentTarget).attr('class'));
	}

});