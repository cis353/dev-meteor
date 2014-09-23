Meteor.methods({
	checkIfBasicAuthValid: function(basic_auth_url,account_sid,auth_token,connectedAccountId){
		console.log(connectedAccountId);
    account_sid = account_sid;
    auth_token = auth_token;
    basic_auth_url = basic_auth_url;
    url = basic_auth_url;

    var result = Meteor.http.get(url,{auth: ''+ account_sid +':'+ auth_token+''},
	    function(error,result){
	    	var existingConnectedAccount = ConnectedAccounts.findOne(connectedAccountId);
	      if(! error){
	      	console.log('at saving with result');
	      if(result.statusCode == 200)
	      	ConnectedAccounts.update(existingConnectedAccount._id,{$set: {accessTokenValid: true}});
	      }
	      else{
	      	console.log('at saving with error');
	      	ConnectedAccounts.update(existingConnectedAccount._id,{$set: {accessTokenValid: false}});
	      }
	      });
  }
});