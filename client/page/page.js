//Template.pageTemplate._id = function(){
//  return this.params._id;
//};

Router.map(function(){
  this.route('pageTemplate', {
    path: '/page/:_id',
    //layoutTemplate: '',
//    waitOn: function(){
//      console.log('page: waitOn');
//      return Meteor.subscribe('records', this.params._id);
//    },
//    onBeforeAction: function(){
//      console.log('page: onBeforeAction');
//      //console.log(this);
//      var record = Records.findOne({ path: this.params._id });
//      console.log(JSON.stringify(record));
//      if (record){
//        //this._id = record._id;  //tag the record ID
//        //remove the template then re-add it to the template list
//        console.log('page: record found');
//        delete Template[record._id];
//        Template.__define__(record._id, eval(Compiler.compile(record.template)));
//        //attach the events to this template if there are any
//        if (record.events){
//          eval('var events = ' + record.events);
//          Template[record._id].events(events);
//        }
//      }
//    },
//    onAfterAction: function(){
//      console.log('page: onAfterAction');
//    },
    data: function(){
      return { _id: this.params._id };
    },
    action: function(){
      if (this.params['layoutTemplate']){
        Session.set('layoutTemplate', this.params['layoutTemplate']);
      }
      this.render('pageTemplate');
    }
//      if (this.ready()){
//        console.log('page: action - ' + this.params._id);
//        if (Template[this.params._id]){
//          this.render(this.params._id);
//          //this.refresh();
//        }else{
//          this.render('notFound');
//        }
//      }else{ }
//    }
  });
});