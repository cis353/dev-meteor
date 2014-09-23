Router.map(function(){
  this.route('raw', {
    waitOn: function(){
      return Meteor.subscribe('records', this.params._id);
    },
    data: function(){
      return { record: JSON.stringify(Records.findOne(this.params._id), null, 2) }
    },
    path: 'raw/:_id'
  });
});