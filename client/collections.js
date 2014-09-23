// Solutions = new Meteor.Collection("solutions");

EventMonitors = new Meteor.Collection("eventmonitors");
Triggers = new Meteor.Collection("triggers");
// Actions = new Meteor.Collection("actions");
TaskQueue = new Meteor.Collection("taskqueue");
// Services = new Meteor.Collection("services");

Records = new Meteor.Collection("records");
History = new Meteor.Collection("history");

Meteor.subscribe('solutions');
Meteor.subscribe('records');
Meteor.subscribe('history');
Meteor.subscribe('eventmonitors');
Meteor.subscribe('taskqueue');

Meteor.subscribe("services");