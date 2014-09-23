
Meteor.checkForValidAccessToken = function(serviceName,serviceId,connectedAccountId){
var connectedAccount = ConnectedAccounts.findOne(connectedAccountId)
// we got the credentials for checking account  / need to get url and pass it 

  Meteor.call('accessTokenUrlParams',serviceName,function(error,result){
// BASIC AUTH VALIDATION START HERE
    if(result.BasicAuthUrl)
    {
      basic_auth_url = result.BasicAuthUrl;
      account_sid = connectedAccount.accountSId;
      auth_token = connectedAccount.accessToken ;
      Meteor.call("checkIfBasicAuthValid",basic_auth_url, account_sid,auth_token,connectedAccountId);

    }

//  BASIC AUTH VALIDATION ENDS HERE ------- CLEAR ELASE STATEMENT
    else{
    var accessTokenUrl = Meteor.getAccessTokenValidationUrl(result)
    accessTokenUrl = accessTokenUrl+"?access_token=" + connectedAccount.accessToken

    Meteor.tokenValidityChecker(accessTokenUrl,connectedAccountId)
  }
  })
}

Meteor.getAccessTokenValidationUrl = function(options){
  var validityUrl= options.AccessTokenUrl+"?";
  for(key in options){
    if(key=='AccessTokenUrl')
      continue;
      validityUrl +=key+"="+options[key]+"&";
  }
  return validityUrl.slice(0,-1);
}

Meteor.tokenValidityChecker = function(url,connectedAccountId){

  Meteor.call("checkIfTokenValid",url,connectedAccountId,function(error,result){});

}