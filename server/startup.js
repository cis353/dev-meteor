Meteor.startup(function(){

	// first, remove configuration entry in case service is already configured
	Accounts.loginServiceConfiguration.remove({service: "facebook"});
	Accounts.loginServiceConfiguration.insert({service: "facebook",appId: "910651508951507",secret: "d97b010c435a6b9861f7329c8d24c22b"});

	// first, remove configuration entry in case service is already configured
	Accounts.loginServiceConfiguration.remove({
	  service: "twitter"
	});
	Accounts.loginServiceConfiguration.insert({
	  service: "twitter",
	  consumerKey: "oFtRcSDVZdPxnCUCExhTbnRTc",
	  secret: "bhQlMq8YDM71enMpgzwCOUWfiQcA5WBpF3EhVwZMv676d0tVPy"
	});

	// first, remove configuration entry in case service is already configured
	Accounts.loginServiceConfiguration.remove({
	  service: "google"
	});
	Accounts.loginServiceConfiguration.insert({
	  service: "google",
	  clientId: "887090077504-n7a1tgrj23etunps1ordh76nc808mo2h.apps.googleusercontent.com",
	  secret: "zk_n_dw5m_8nZDHNoX8ZUiT3"
	});

});


