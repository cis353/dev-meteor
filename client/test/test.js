Router.map(function(){
  this.route('test', {
    path: '/test*',
    controller: '',
    waitOn: function(){
      console.log('test: waitOn');
    },
    onBeforeAction: function(){
      console.log('test: onBeforeAction');
      //this.layoutTemplate = 'main2';
    },
    onAfterAction: function(){
      console.log('test: onAfterAction');
    },
    data: function() {
      console.log('test: data');
      console.log(this.params);
    },
    action: function(){
      console.log('test: action');
      this.render();
    }
  });
  
  //test server side route
  this.route('serverroute', {
	path: '/serverroute',
	where: 'server',
	action: function(){
	  this.response.end('Testing 1234');
	}
  });
});

Template.test.rendered = function(){
  console.log('test: rendered');
};