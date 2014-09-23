//=================================================

/*{
   =========action table=======
    _id: Integer ,
    serviceId: String,
    actionName: String,
    actionDescription: String
}
*/
Actions = new Meteor.Collection("actions");
//====================================================

var Schemas = {};
Schemas.Action = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  serviceId: {
    type: String
  },
  actionName: {
    type: String
  },
  actionDescription: {
    type: String
  }
});

Actions.attachSchema(Schemas.Action);
