//================================================
/*{
  ====Event_data table======
    _id : Integer,
    event_id : Integer,
    object_id :  ,
    data: hash
}
*/
EventData = new Meteor.Collection("eventdata");
//===================================

var Schemas = {};
Schemas.EventDatum = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  eventId: {
    type: String
  },
  eventData: {
    type: String,
    optional: true
  }
});

EventData.attachSchema(Schemas.EventDatum);
