Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  },
  test: function (message) {
    console.log(message);
  }
});

Meteor.methods({
  isWebsiteUp: function(URL, returnText) {
    console.log('Getting URL: ' + URL);
    Meteor.http.get(URL, function(error, result){
      console.log(result);
    });
  }
});