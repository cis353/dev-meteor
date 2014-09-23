//===================================

/*{
  ====Activity table======
    _id : Integer,
    sent_at : ,
    email_id : String,
    data : ,
    is_success : boolean,
    attempts : ,
    success : Time.now,
    source_type : string,
    target_type : string,
    sourceId : Integer,
    TargetId : Integer
}
*/
TaskQueues = new Meteor.Collection("taskqueues");
//=================================================
var Schemas = {};
Schemas.TaskQueue = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  eventId: {
    type: String
  },
  attempts: {
    type: Number
  },
  sourceId: {
    type: String
  },
  targetId: {
    type: String
  }
});

TaskQueues.attachSchema(Schemas.Activity);