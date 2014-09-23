//=================================================

/*{
   =========resource table=======
    _id: Integer ,
    service_name: String
}
*/
Services = new Meteor.Collection("services");
//====================================================

var Schemas = {};
Schemas.Service = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  serviceName: {
    type: String
  },
  serviceType:{
    type: String
  },
  serviceAlias:{
    type: String
  },
  serviceAuthType:{
    type: String,
    optional: true
  }
});

Services.attachSchema(Schemas.Service);