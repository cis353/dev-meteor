Router.map(function(){
  this.route('interface');
  this.route('interface/desktop');
  this.route('interface/list');
  this.route('interface/calendar');
});

Template.interface.rendered = function(){
  console.log('interface template rendered');
  $('#q').focus();
}