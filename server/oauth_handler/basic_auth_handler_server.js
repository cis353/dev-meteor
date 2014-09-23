Meteor.methods({
// *************** basic auth handler *********************
  basicAuthCall: function(basic_auth_url,account_sid,auth_token,connectedName){
    account_sid = account_sid;
    auth_token = auth_token;
    basic_auth_url = basic_auth_url;
    url = basic_auth_url;
    var result = Meteor.http.get(url,{auth: ''+ account_sid +':'+ auth_token+''},
      function(error,result){
        if(! error){
          Meteor.call("saveBasicAuthConnectedAccounts",result,account_sid,auth_token,connectedName);         
        }
        else{
          console.log(error);
        }
      });
  },

  saveBasicAuthConnectedAccounts: function(data,account_sid,auth_token,connectedName){      
    // try{
    //     var parsedResponse = JSON.parse(data.content)
    //   }catch(e){
    //     var parsedResponse = querystring.parse(data.content)
    //     console.log("error"+JSON.stringify(e))
    //   }
    if(data.statusCode == 200){
      var account_sid = account_sid;
      var auth_token = auth_token;
      var connectedName = connectedName;
      var userId = ServerSession.get("userId");
      var serviceId = ServerSession.get("serviceId");
      ConnectedAccounts.insert({userId: userId , connectedName: connectedName, serviceId: serviceId, accountSId: account_sid, accessToken: auth_token, disconnected: false});
    }
    else{
      console.log('bad response');          
    }
  },
// *************** basic auth handler ends here *********************

// *************** connected account disconnect *********************
  connectedAccountDisconnect: function(Id){
    ConnectedAccounts.update({_id: Id}, {$set: {disconnected: true}});
  },
// *************** connected account disconnnect ends here *********************

// *************** connceted account rename  *********************
  renameConnectedAccount: function(connected_account_id,account_name){
    var result = ConnectedAccounts.update({_id: connected_account_id}, {$set: {connectedName: account_name}});
  },
// *************** connceted account rename ends here  *********************

// *************** connceted account reconnect  *********************
  basicAuthReconnect: function(basic_auth_url,connected_account_id,account_sid,auth_token,connectedName){
    account_sid = account_sid;
    auth_token = auth_token;
    basic_auth_url = basic_auth_url;
    url = basic_auth_url;
    var result = Meteor.http.get(url,{auth: ''+ account_sid +':'+ auth_token+''},
    function(error,result){
      if(! error){
        Meteor.call("saveBasicAuthReconnect",result,connected_account_id,account_sid,auth_token,connectedName);         
      }
      else{
        console.log(error);
      }
    });
  },
  saveBasicAuthReconnect: function(data,connected_account_id,account_sid,auth_token,connectedName){
    if(data.statusCode == 200){
    var id = connected_account_id;
    var account_sid = account_sid;
    var auth_token = auth_token;
    var connectedName = connectedName;
    ConnectedAccounts.update({_id: connected_account_id}, {$set: {connectedName: connectedName, accountSId: account_sid, accessToken: auth_token, disconnected: false}});
    console.log('updating reconnect ');
    }
    else{
      console.log('bad response');          
    }
  }
});