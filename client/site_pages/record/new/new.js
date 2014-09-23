Router.map(function(){
  this.route('new_record', {
    path: '/new/:type',
    data: function(){
      return {
        'type': this.params.type
      }
    }
  });     //New Record
  this.route('new',{
    layoutTemplate: "userLayout"
  });
});

Template.new.types = function(){
  return Types.find({}, { sort: { 'name': 1 }});
}

Template.new_record.events({
  'click #cancelBtn': function(){
    history.back();
  }
});