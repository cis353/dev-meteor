Meteor.methods({
  checkIfTokenValid: function(url,connectedAccountId){

    Meteor.http.get(url,function(error,result){
      if(!error && result.statusCode == 200){
        ConnectedAccounts.update(connectedAccountId,{$set: {accessTokenValid: true}});
      }
      else{
        ConnectedAccounts.update(connectedAccountId,{$set: {accessTokenValid: false}});
      }
    })
  }
});