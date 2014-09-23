Router.map(function() {
  this.route('register', {
    //controller: 'BaseController',
    layoutTemplate: "mainLayout"
  });
});


Template.register.rendered = function() {
  $(".alert").hide();
  Session.set('alert', null)
}


Deps.autorun(function() {
  if (Session.get('alert') != null) {
    $(".alert").show();
  }
})




Template.register.events({

  "submit #registerForm": function(event, template) {
    event.preventDefault();
    name = template.find("#register-name").value
    email = trimInput(template.find("#register-email").value.toLowerCase());
    password = template.find('#register-password').value;
    passwordConfirm = template.find('#register-re-password').value;


    if (isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && areValidPasswords(password, passwordConfirm) && acceptTerms()) {
      Accounts.createUser({
        email: email,
        password: password,
        profile: {
          name: name
        }
      }, function(err) {
        if (err) {
          if (err.message === 'Email already exists. [403]') {
            Session.set('alert', 'We\'re sorry but this email is already used.');
            template.find("#register-email").setAttribute("class", "sivan");
          } else {
            Session.set('alert', 'We\'re sorry but something went wrong.');
          }
        } else {
          Session.set('success', 'Congrats! You have been registered with zzBase!');
        }
      });
    }
    return false;
  }
});

// Show alert when something goes wrong with the signup process

Template.register.helpers({
  alert: function() {
    return Session.get('alert');
  }
});



// Functions for validation of signup and signin form
trimInput = function(value) {
  return value.replace(/^\s*|\s*$/g, '');
};

isNotEmpty = function(value) {
  if (value && value !== '') {
    return true;
  }
  Session.set('alert', 'Please fill in all required fields.');
  return false;
};

isEmail = function(value) {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(value)) {
    return true;
  }
  Session.set('alert', 'Please enter a valid email address.');
  return false;
};

isValidPassword = function(password) {
  if (password.length < 6) {
    Session.set('alert', 'Your password should be 6 characters or longer.');
    return false;
  }
  return true;
};

areValidPasswords = function(password, confirm) {
  if (!isValidPassword(password)) {
    return false;
  }
  if (password !== confirm) {
    Session.set('alert', 'Your two passwords are not equivalent.');
    $("#register-password , #register-re-password").addClass("sivan");
    return false;
  }
  return true;
};

acceptTerms = function() {
  if ($("#termsaccepted").is(":checked")){
    return true
  }
  else{
    Session.set('alert', 'Please accept to the terms of zzBase');
    return false ;
  }

};