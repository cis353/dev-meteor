//=================================================

/*{
   =========resource table=======
    _id: Integer ,
    resourceId: String,
    userId: String,
    accessToken: String,
    data: Object
}
*/
ConnectedAccounts = new Meteor.Collection("connectedaccounts");
//====================================================

var Schemas = {};

Schemas.ConnectedAccount = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  serviceId: {
    type: String,
    optional: true
  },
  userId: {
    type: String,
    optional: true
  },
  userEmail: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: true
  },
  connectedName:{
    type: String,
    // regEx: SimpleSchema.RegEx.Email,
    optional: true
  },
  accessToken: {
    type: String,
    optional: true
  },
  data: {
    // type: Array,
    type: Object,
    optional: true
  },
  accessTokenValid: {
    type: Boolean,
    optional: true
  },
  accountSId:{
    type: String,
    optional: true
  },
  disconnected:{
    type:Boolean,
    optional: true
  }
});

ConnectedAccounts.attachSchema(Schemas.ConnectedAccount);

