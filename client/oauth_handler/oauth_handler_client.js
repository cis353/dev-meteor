// OauthCode that will fetch the credentials from the services


Meteor.authorizeService = function (serviceName,serviceId ,callback) {

  Meteor.authorizeExternalService (serviceName,serviceId, callback);
};

Meteor.getUrl = function(options){
  var loginUrl= options.OauthUrl+"?";
  for(key in options){
    if(key=='OauthUrl')
      continue;
      loginUrl +=key+"="+options[key]+"&";
  }
  return loginUrl.slice(0,-1);

}

Meteor.authorizeExternalService = function (serviceName, serviceId , callback) {
  ServerSession.set("serviceId", serviceId);
  // Call to get the credentials and urls with scopes that we will get from the config file
  Meteor.call("getAPIcredentials",serviceName,function(error,result){
    if(!error){
          if(result.BasicOauthUrl){
            basic_auth_url = result.BasicOauthUrl;
            Session.set("basic_auth_url", basic_auth_url);
            Meteor.basicAuthPopup();
          }
          else{
            serviceUrl = Meteor.getUrl(result)
            Session.set("oAuthUrl", serviceUrl);
            Session.set("oAuthServiceName", serviceName);
            Session.set("oAuthServiceId", serviceId);
            $("#OauthNameModal").modal("show");
          }
    }
    else{
      console.log(error);
    }
  })
};


// Oauth function that will go to url to fetch the access token

function callServiceToGetAccessToken (loginUrl,serviceName,serviceId) {

  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(null);

  var credentialToken = Random.secret();
  var state_param = _stateParam("popup", credentialToken) ;
  service = Services.findOne(serviceId)

  ServerSession.set("userId", Meteor.user()._id);
  ServerSession.set("userEmail", Meteor.user().emails[0].address);
  ServerSession.set("serviceId", serviceId);

  loginUrl = loginUrl+'&state=' +  state_param

  launchLogin({
    loginService: serviceName,
    loginStyle: "popup",
    loginUrl: loginUrl,
    credentialRequestCompleteCallback: credentialRequestCompleteCallback,
    credentialToken: credentialToken,
    popupOptions: {width: 470, height: 420}
  });


}


function launchLogin(options){
  if (! options.loginService)
    throw new Error('loginService required');
  if (options.loginStyle === 'popup') {
    showPopup(
      options.loginUrl,
      _.bind(options.credentialRequestCompleteCallback, null, options.credentialToken),
      options.popupOptions);
  } else if (options.loginStyle === 'redirect') {
    saveDataForRedirect(options.loginService, options.credentialToken);
    window.location = options.loginUrl;
  } else {
    throw new Error('invalid login style');
  }
}


showPopup = function (url, callback, dimensions) {
  // default dimensions that worked well for facebook and google
  var popup = openCenteredPopup(
    url,
    (dimensions && dimensions.width) || 650,
    (dimensions && dimensions.height) || 331
  );

  var checkPopupOpen = setInterval(function() {
    try {
      // Fix for #328 - added a second test criteria (popup.closed === undefined)
      // to humour this Android quirk:
      // http://code.google.com/p/android/issues/detail?id=21061
      var popupClosed = popup.closed || popup.closed === undefined;
    } catch (e) {
      // For some unknown reason, IE9 (and others?) sometimes (when
      // the popup closes too quickly?) throws "SCRIPT16386: No such
      // interface supported" when trying to read 'popup.closed'. Try
      // again in 100ms.
      return;
    }

    if (popupClosed) {
      clearInterval(checkPopupOpen);
      callback();
    }
  }, 100);
};

var openCenteredPopup = function(url, width, height) {
  var screenX = typeof window.screenX !== 'undefined'
        ? window.screenX : window.screenLeft;
  var screenY = typeof window.screenY !== 'undefined'
        ? window.screenY : window.screenTop;
  var outerWidth = typeof window.outerWidth !== 'undefined'
        ? window.outerWidth : document.body.clientWidth;
  var outerHeight = typeof window.outerHeight !== 'undefined'
        ? window.outerHeight : (document.body.clientHeight - 22);
  // XXX what is the 22?

  // Use `outerWidth - width` and `outerHeight - height` for help in
  // positioning the popup centered relative to the current window
  var left = screenX + (outerWidth - width) / 2;
  var top = screenY + (outerHeight - height) / 2;
  var features = ('width=' + width + ',height=' + height +
                  ',left=' + left + ',top=' + top + ',scrollbars=yes');
  var newwindow = window.open(url, 'Login', features);
  if (newwindow.focus)
    newwindow.focus();
  return newwindow;
};


saveDataForRedirect = function (loginService, credentialToken) {
  console.log("loginService");
  console.log(loginService);
  console.log("credentialToken");
  console.log(credentialToken);
};



_stateParam = function (loginStyle, credentialToken) {
  var state = {
    loginStyle: loginStyle,
    credentialToken: credentialToken
  };

  if (loginStyle === 'redirect')
    state.redirectUrl = '' + window.location;

  // Encode base64 as not all login services URI-encode the state
  // parameter when they pass it back to us.
  return btoa(JSON.stringify(state));
};



// Different login style for services

_loginStyle = function (service, config, options) {

  var loginStyle = (options && options.loginStyle) || config.loginStyle || 'popup';

  if (! _.contains(["popup", "redirect"], loginStyle))
    throw new Error("Invalid login style: " + loginStyle);

  // If we don't have session storage (for example, Safari in private
  // mode), the redirect login flow won't work, so fallback to the
  // popup style.
  if (loginStyle === 'redirect') {
    try {
      sessionStorage.setItem('Meteor.oauth.test', 'test');
      sessionStorage.removeItem('Meteor.oauth.test');
    } catch (e) {
      loginStyle = 'popup';
    }
  }

  return loginStyle;
};

Template.integrations.events({
  "click #OAuthAuthentication": function(){
    ServerSession.set("connectedName",$("#connected_mail").val())
    callServiceToGetAccessToken(Session.get("oAuthUrl"),Session.get("oAuthServiceName"),Session.get("oAuthServiceId"));
  }

})