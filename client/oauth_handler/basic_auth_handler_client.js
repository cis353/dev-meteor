
Meteor.basicAuthPopup = function(){
  $('#validate-basic-auth').click();
}

Meteor.basicAuthCall = function(account_sid,auth_token,connectedName){
	ServerSession.set("userId", Meteor.user()._id);
  ServerSession.set("userEmail", Meteor.user().emails[0].address);
 	basic_auth_url = Session.get("basic_auth_url");
 	Meteor.call("basicAuthCall",basic_auth_url,account_sid,auth_token,connectedName);
}

Meteor.basicAuthReconnect = function(connected_account_id,account_sid,auth_token,connectedName){
connected_account = ConnectedAccounts.findOne(connected_account_id);
var serviceId = connected_account.serviceId ;
var service = Services.findOne(serviceId)
var serviceName = service.serviceAlias ;

	Meteor.call("getAPIcredentials",serviceName,function(error,result){
		if(!error){
			alert(result);
      if(result.BasicOauthUrl){
      	alert("if");
        basic_auth_url = result.BasicOauthUrl;
        Meteor.call("basicAuthReconnect",basic_auth_url,connected_account_id,account_sid,auth_token,connectedName);
      }
      else{
      	alert('its not basic auth');
      }
    }
    else{
    	alert(error)
    }

	});
}
