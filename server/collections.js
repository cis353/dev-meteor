//Users = new Meteor.Collection("users");
          // Solutions = new Meteor.Collection("solutions");                     // _id, name, ownerId (userId), users (array of _id)
Roles = new Meteor.Collection("roles");                             // _id, name, icon, solutionId,
          // Events = new Meteor.Collection("events");                           // _id, name, solutionId,
          // Actions = new Meteor.Collection("actions");                         // _id, name, solutionId,
FlowCharts = new Meteor.Collection("flowcharts");                   // _id, name, solutionId,
Pages = new Meteor.Collection("pages");                             // _id, name, solutionId,
SearchIndexes = new Meteor.Collection("searchindexes");             // _id, name, solutionId,
          // ConnectedAccounts = new Meteor.Collection("connectedaccounts");     // _id, name, solutionId, serviceId, credentials,
          // Services = new Meteor.Collection("services");                       // _id, name, icon, authentication method [api key, oauth2], events, actions,

//Backgruond Processing
TaskQueue = new Meteor.Collection("taskqueue");                    // processId, { url:        status:   }

//SolutionTemplate
//TriggerTemplate
//ActionTemplate

//Database stuff
Records = new Meteor.Collection("records");
History = new Meteor.Collection("history");

//Applications - name,
//Applications = new Meteor.Collection("applications");
//Types = new Meteor.Collection("types");
//Permissions = new Meteor.Collection("permissions");
//Dependencies = new Meteor.Collection("dependencies");
//Relationships = new Meteor.Collection("relationships");   //how the records are linked to each other

Records.allow({
  insert: function(){ return true },
  update: function(userId, doc, fieldNames, modifier){
    console.log('record updated', userId, doc, fieldNames, modifier);
    var historyRecord = doc;
    historyRecord._recordId = doc._id;
    delete historyRecord._id;
    History.insert(doc);
    return true
  },
  remove: function(){ return true }
});

History.allow({
  insert: false,
  update: false,
  remove: false
});

TaskQueue.allow({ insert: function(){ return true; }, update: function(){ return true; }, remove: function(){ return true; } });
History._ensureIndex({ _recordId: 1 });

//Records.find().observe({
//  changed: function(newDocument, oldDocument){
//    //store the old version of the document
//    console.log('observechanges', newDocument, oldDocument);
//    //delete oldDocument._id;
//    oldDocument._recordId = oldDocument._id;
//    delete oldDocument._id;
//    History.insert(oldDocument);
//  }
//});

//Records._ensureIndex({
//  _fullTextIndex: 'text'
//});


//Meteor.publish('applications', function(){ return Applications.find() });
Meteor.publish('records', function(){ return Records.find() });
Meteor.publish('history', function(){ return History.find() });
Meteor.publish('taskqueue', function(){ return TaskQueue.find() })
//Meteor.publish('taskqueue', function(){ return TaskQueue.find() })
//Meteor.publish('types', function(){ return Types.find(); });


// Applications       (maybe a record of type "application")
// Records
// Types              (maybe a record of type "type")
// Relationships
// Permissions
// Groups
// Subscriptions
// Triggers / Events
// Users (tagged data to their user account)

//Meteor.publish('records', function(){
//  return Records.find({},);
//  //return { _id: '1234', 'field': "This is a test" };
//});


/*
How to build Asana within zzBase.

Examples:
An email would be a "record" of type "email".


A "conversation" would be defined as a list of "messages".


*/