Router.map(function(){
  this.route('integrations',{
	//controller: 'BaseController',
	layoutTemplate: "userLayout"
  });
});

Template.servicesList.events({
  "click .service": function(){
    $("#modal-add-integration").modal('hide');
    service = Services.findOne(this._id);
    Session.set('ConnectedServiceName', service.serviceName);
    Meteor.authorizeService(service.serviceAlias,service._id);
  }
});

Template.integrations.events({
  "click .api-validator": function(){
    service = Services.findOne(this.serviceId);
    Meteor.checkForValidAccessToken(service.serviceAlias,service._id,this._id);
  },
  "click .connected-account-rename": function(){
    Session.set("RenameConnectedAccountId", this._id)
    var connected_account = ConnectedAccounts.findOne(this._id)
    Session.set("ConnectedName", connected_account.connectedName)
    $("#modal-connected-account-rename").modal('show');
  },
  "click .connected-account-reconnect-basic-auth": function(){
    connected_account = ConnectedAccounts.findOne(this._id);
    Session.set("ReconnectAccessToken",connected_account.accessToken)
    Session.set("ReconnectAccountSId", connected_account.accountSId)
    Session.set("ReconnectConnectedName", connected_account.connectedName)
    Session.set("ReconnectConnectedAccountId", this._id);
    $('#modal-connected-account-reconnect').modal('show');
    // $('#authenticate-reconnect').click()
    Meteor.call("connectedAccountReconnect", this._id);
  },
  "click .connected-account-reconnect-oauth2": function(){
    var connected_account = ConnectedAccounts.findOne(this._id);
    var service = Services.findOne(connected_account.serviceId)
    alert(service.serviceAlias)
    alert(service._id)
    Meteor.authorizeService(service.serviceAlias,service._id);
  },
  "click .connected-account-disconnect": function(){
    Meteor.call("connectedAccountDisconnect",this._id);
  },
  "click .connected-account-rename-update": function(){
    var connected_account_id = Session.get("RenameConnectedAccountId");
    var account_name = $('#connected-mail-rename').val();
    Meteor.call("renameConnectedAccount",connected_account_id,account_name,function(err,result){
      $("#modal-connected-account-rename").modal('hide');
    });
  }
});

Template.integrations.helpers({
  // This will be to show the list of the services that the user is connected to
  "UserIntegration": function(){
    return ConnectedAccounts.find({"userId": Meteor.user()._id})
  },
  "ConnectedAccount": function(){
    return Session.get('connected_account');
  },
  "ConnectedServiceName": function(){
    return Session.get('ConnectedServiceName');
  },
  "ConnectedName": function(){
    return Session.get("ConnectedName");
  },
  "ReconnectConnectedName": function(){
    return Session.get("ReconnectConnectedName")
  },
  "ReconnectAccessToken": function(){
    return Session.get("ReconnectAccessToken");
  },
  "ReconnectAccountSId": function(){
    return Session.get("ReconnectAccountSId")
  }
});

Template.integrations.events({
  "click #basci-auth-authentication": function(){
    var account_sid = $('#account_sid').val();
    var auth_token = $('#auth_token').val();
    var connectedName = $('#connected_name').val();
    // $("#modal-validate-basic-auth").modal('hide');
    Meteor.basicAuthCall(account_sid,auth_token,connectedName);
    $("#modal-add-basic-auth-integration").modal('hide');
    $("#account_sid").val('');
    $("#auth_token").val('');
  },
  // connectedAccounts reconnect data access
  "click #authenticate-reconnect": function(){
    var connected_account_id = Session.get("ReconnectConnectedAccountId")
    var account_sid = $('#reconnect-account-sid').val();
    var auth_token = $('#reconnect-auth-token').val();
    var connectedName = $('#reconnect-connected-name').val();
    Meteor.basicAuthReconnect(connected_account_id,account_sid,auth_token,connectedName);
    $("#modal-connected-account-reconnect").modal('hide');
  }
});


UI.registerHelper('userServiceName', function(context, options) {
  if(context)
    return Services.findOne(context).serviceName
});

UI.registerHelper('getValiditySign', function(context, options) {
  if(context == true)
    return "glyphicon glyphicon-thumbs-up"
  else if(context == false)
    return "glyphicon glyphicon-thumbs-down"
  else
    return ""
});

UI.registerHelper('getDisconnectionStatus', function(context, options){
  if(context == true)
    return "Disconnected"
  else
    return "Disconnect"
});

UI.registerHelper('getAuthTypeClass', function(context, options){
  var connectedAccount = ConnectedAccounts.findOne(context)

  if(service.serviceAuthType == "OAuth2"){
    return "connected-account-reconnect-oauth2"
  }
  else if (service.serviceAuthType == "BasicAuth") {
    return "connected-account-reconnect-basic-auth"
  }
  else{
    return "disabled"
  }
});


// Show services list in modal
Template.servicesList.services = function(){
  return Services.find({serviceType: "source"})
}
