//=================================================

/*{
   =========resource table=======
    _id: Integer ,
    resourceeventType: String,
    resourceId: String
}
*/
Events = new Meteor.Collection("events");
//====================================================

var Schemas = {};
Schemas.Event = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  serviceId: {
    type: String
  },
  eventName: {
    type: String
  },
  eventDescription: {
    type: String
  }
});

Events.attachSchema(Schemas.Event);
