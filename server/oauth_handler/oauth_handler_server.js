var querystring = Npm.require('querystring');
Router.map(function () {
  this.route('oauthhandler', {
    where: 'server',
    path: '/:service/oauthhandler',

    onAfterAction: function(){
      var serviceName = this.params.service ;
      var code = this.options.params.code ;
      Meteor.exchangeAccessToken(serviceName,code);
    }

  });
});

Meteor.methods({
  getAPIcredentials: function(serviceName){
    console.log(serviceName+"-----------------------");

    var apiKeys = JSON.parse(Assets.getText('app_keys.json'));
    try {
      return apiKeys[serviceName];
    }
    catch(err) {
      console.log("not able to fetch credentials")
    }
  },

//  FOR TWILIO AND ASANA STARTS HERE

//  TWILIO AND ASANA ENDS HERE

  queryStringToJSON: function (url) {

    if (url === '')
        return '';
    var pairs = url.split('&');
    var result = {};
    for (var idx in pairs) {
        var pair = pairs[idx].split('=');
        if (!!pair[0])
            result[pair[0].toLowerCase()] = decodeURIComponent(pair[1] || '');
    }
    return result;
  },
  saveConnectedAccounts: function(data){

    try{
        var parsedResponse = JSON.parse(data.content)
      }catch(e){
        var parsedResponse = querystring.parse(data.content)
        console.log("error"+JSON.stringify(e))
      }

      var accessToken = parsedResponse.access_token ;
      var expiresAt = parsedResponse.expires ;
      var extradata = {}
      extradata.expiresAt = expiresAt
      if(data.statusCode == 200){
        var userId = ServerSession.get("userId")
        var userEmail = ServerSession.get("userEmail");
        var serviceId = ServerSession.get("serviceId");
        var connectedName = ServerSession.get("connectedName")
        var existingConnectedAccount = ConnectedAccounts.findOne({userId: userId,serviceId: serviceId})
        if(existingConnectedAccount == undefined){
          console.log('saving connected account as new account');

          ConnectedAccounts.insert({userId: userId , userEmail: userEmail,connectedName: connectedName , serviceId: serviceId,accessToken: accessToken,data: extradata})
        }
        else{
          console.log('saving connected account as an existing account');
          ConnectedAccounts.update(existingConnectedAccount._id,{$set: {accessToken: accessToken,data: extradata}});
        }
      }

  },

  accessTokenUrlParams: function(serviceName){

    var apiKeys = JSON.parse(Assets.getText('api_validator_keys.json'));
    try {
      return apiKeys[serviceName];
    }
    catch(err) {
      console.log("not able to fetch credentials")
    }
  }

});







Meteor.exchangeAccessToken = function(serviceName,code){
  var apiKeys = JSON.parse(Assets.getText('exchange_url.json'));
  var serviceCredentials = apiKeys[serviceName].data

  serviceCredentials.code = code;

  var responseContent;
  try {
    Meteor.http.post(
      apiKeys[serviceName].exchangeUrl, {params: serviceCredentials
      },function(error,result){
        console.log("result");
        console.log(result);
        Meteor.call("saveConnectedAccounts",result,function(){});
      });
  }
  catch(err) {
    console.log("not able to fetch credentials")
  }
}

Meteor.getExchangeUrl = function(options){
  var loginUrl= options.exchangeUrl+"?";
  for(key in options){
    if(key=='exchangeUrl')
      continue;
      loginUrl +=key+"="+options[key]+"&";
  }
  return loginUrl.slice(0,-1);
}