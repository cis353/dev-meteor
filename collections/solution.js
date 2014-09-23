//=================================================

/*{
   =========event table=======
    _id: Integer ,
    userId: String
    eventName: String
    eventSourceId: String
    eventTargetId: String
    isActivated: Boolean
    lastPostedData: Object
    lastPostedAt: Date
}
*/
Solutions = new Meteor.Collection("solutions");
//====================================================

var Schemas = {};
Schemas.Solution = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  userId: {
    type: String
  },
  solutionName: {
    type: String,
    optional: true
  },
  solutionSourceId: {
    type: String,
    optional: true
  },
  solutionEventId: {
    type: String,
    optional: true
  },
  solutionTargetId: {
    type: String,
    optional: true
  },
  solutionActionId: {
    type: String,
    optional: true
  },
  isActivated: {
    type: Boolean,
    optional: true
  },
  lastPostedData: {
    type: Object,
    optional: true
  },
  lastPostedAt: {
    type: Date,
    optional: true
  }
});


Solutions.attachSchema(Schemas.Solution);
