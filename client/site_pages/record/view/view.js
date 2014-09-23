Router.map(function(){
  this.route('view', {
    path: '/view/:_id',
    //loadingTemplate: 'loading',
    waitOn: function(){
      return Meteor.subscribe('records', this.params._id);
    },
    data: function(){
      if (this.ready()){
        var record = Records.findOne(this.params._id);
        return { 'record': record };
      }
    },
    controller: 'RequireAuth'
  });  //New Record
});

Template.view.events({
  'click #cancelBtn': function(){
    history.back();
  }
});