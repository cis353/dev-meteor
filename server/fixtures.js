if(Services.find().count() === 0){
  var fbsrc = Services.insert({serviceName: "Facebook",serviceType: "source",serviceAlias: "facebook",serviceAuthType: "OAuth2"})

    Events.insert({"serviceId": fbsrc,"eventName":"New Tagged Photo of You","eventDescription":"Triggers when you are tagged in a photo."})
    Events.insert({"serviceId": fbsrc,"eventName":"New Photo Posted by You","eventDescription":"Triggers when you post a photo to your profile."})
    Events.insert({"serviceId": fbsrc,"eventName":"New Post to Your Timeline","eventDescription":"Triggers when someone (including you) posts to your profile (status update, photo, or video)."})
    Events.insert({"serviceId": fbsrc,"eventName":"New Video Posted by You","eventDescription":"Triggers when you post a video to your profile."})
    Events.insert({"serviceId": fbsrc,"eventName":"New Post by You","eventDescription":"Triggers when you post to your profile (status update, photo, or video)."})


  var gdrivesrc = Services.insert({serviceName: "Google Drive",serviceType: "source",serviceAlias: "google drive",serviceAuthType: "OAuth2"})

    Events.insert({"serviceId": gdrivesrc,"eventName":"New File in Folder","eventDescription":"Triggered when a new file is added to a specific folder (but not its subfolders)."})
    Events.insert({"serviceId": gdrivesrc,"eventName":"New File","eventDescription":"Triggered when any new file is added (inside of any folder)."})

  var gmailsrc = Services.insert({serviceName: "Gmail",serviceType: "source",serviceAlias: "gmail",serviceAuthType: "OAuth2"})
    Events.insert({"serviceId": gmailsrc,"eventName":"New Email","eventDescription":"Triggers on new email (within any thread)."})
    Events.insert({"serviceId": gmailsrc,"eventName":"New Attachment","eventDescription":"Triggers on new emails that have attachments."})
    Events.insert({"serviceId": gmailsrc,"eventName":"New Unique Sender","eventDescription":"Triggers whenever you receive a new email from someone you have never received an email from before. Note: only since you enable this Zap."})
    Events.insert({"serviceId": gmailsrc,"eventName":"New Inbox","eventDescription":"Triggers when a new inbox is created."})
    Events.insert({"serviceId": gmailsrc,"eventName":"New Thread","eventDescription":"Triggers once per Gmail thread."})

  var dropboxsrc = Services.insert({serviceName: "DropBox",serviceType: "source",serviceAlias: "dropbox",serviceAuthType: "OAuth2"})
    Events.insert({"serviceId":dropboxsrc,"eventName":"New Directory","eventDescription":"Triggers when a new directory is added."})
    Events.insert({"serviceId":dropboxsrc,"eventName":"New File in Directory","eventDescription":"Triggers when a new file is added to a directory."})

  var twittersrc = Services.insert({serviceName: "Twitter",serviceType: "source",serviceAlias: "twitter",serviceAuthType: null})

    Events.insert({"serviceId": twittersrc ,"eventName":"Search Mention","eventDescription":"Triggers from mention of search term."})
    Events.insert({"serviceId": twittersrc ,"eventName":"My Tweet","eventDescription":"Triggers from you tweet something new."})
    Events.insert({"serviceId": twittersrc ,"eventName":"Favorited Tweet","eventDescription":"Triggers when a specific user favorites a tweet."})
    Events.insert({"serviceId": twittersrc ,"eventName":"User Tweet","eventDescription":"Triggers when a specific user tweets."})
    Events.insert({"serviceId": twittersrc ,"eventName":"Search & Geo Mention","eventDescription":"Triggers from mention of search term in a specific geo location."})
    Events.insert({"serviceId": twittersrc ,"eventName":"Tweet in List","eventDescription":"Triggers when there is a new tweet in a specific list you choose."})
    Events.insert({"serviceId": twittersrc ,"eventName":"New Follower","eventDescription":"Triggers when you get a new follower."})

  var asanasrc = Services.insert({serviceName: "Asana",serviceType: "source",serviceAlias: "asana",serviceAuthType: null});
    Events.insert({"serviceId": asanasrc,"eventName":"New Project","eventDescription":"Triggered when you add a new project."})
    Events.insert({"serviceId": asanasrc,"eventName":"New Comment","eventDescription":"Triggered when you add a new comment."})
    Events.insert({"serviceId": asanasrc,"eventName":"New Story","eventDescription":"Triggered when you add a new story."})
    Events.insert({"serviceId": asanasrc,"eventName":"New Tag Created","eventDescription":"Triggered when you create a new tag."})
    Events.insert({"serviceId": asanasrc,"eventName":"New User","eventDescription":"Triggered when you add a new user."})
    Events.insert({"serviceId": asanasrc,"eventName":"New Workspace or Organization","eventDescription":"Triggered when you add a new workspace or organization."})
    Events.insert({"serviceId": asanasrc,"eventName":"New Team","eventDescription":"Triggered when you add a new team."})
    Events.insert({"serviceId": asanasrc,"eventName":"New Task","eventDescription":"Triggered when you add a new task."})

  var googlecalsrc = Services.insert({serviceName: "Google Calendar",serviceType: "source",serviceAlias: "google calendar",serviceAuthType: "OAuth2"})

    Events.insert({"serviceId": googlecalsrc,"eventName":"New Event Search","eventDescription":"Triggers when an event is created that matches a search."})
    Events.insert({"serviceId": googlecalsrc,"eventName":"New Color","eventDescription":"Triggers when a new color is added."})
    Events.insert({"serviceId": googlecalsrc,"eventName":"Event Start","eventDescription":"Triggers a specified time before an event starts"})
    Events.insert({"serviceId": googlecalsrc,"eventName":"New Event","eventDescription":"Triggers when an event is created."})

  var twiliosrc = Services.insert({serviceName: "Twilio",serviceType: "source",serviceAlias: "twilio",serviceAuthType: "BasicAuth"})
    Events.insert({"serviceId": twiliosrc ,"eventName":"New call","eventDescription":"Triggered when a call is finished on your Twilio number."})
    Events.insert({"serviceId": twiliosrc ,"eventName":"New SMS","eventDescription":"Triggered when an SMS is sent to your Twilio number."})

  var stripesrc = Services.insert({serviceName: "Stripe",serviceType: "source",serviceAlias: "stripe",serviceAuthType: "BasicAuth"})
    Events.insert({"serviceId": stripesrc ,"eventName":"New Customer","eventDescription":"Triggeres when a new customer is added."})
    Events.insert({"serviceId": stripesrc ,"eventName":"New Coupon","eventDescription":"Triggeres when you add a new Stripe coupon."})
    Events.insert({"serviceId": stripesrc ,"eventName":"New Charge","eventDescription":"Triggeres when someones credit card is charged."})
    Events.insert({"serviceId": stripesrc ,"eventName":"New Plan","eventDescription":"Triggeres when you add a new Stripe plan."})
    Events.insert({"serviceId": stripesrc ,"eventName":"New Event","eventDescription":"Triggeres when new event is added."})
    Events.insert({"serviceId": stripesrc ,"eventName":"New Invoice Item","eventDescription":"Triggeres when new invoice item is listed."})

  var basecampsrc = Services.insert({serviceName: "Basecamp",serviceType: "source",serviceAlias: "basecamp",serviceAuthType: "OAuth2"})
    Events.insert({"serviceId": basecampsrc ,"eventName":"New Customer","eventDescription":"Triggeres when a new customer is added."})
    // Events.insert({"serviceId": stripesrc ,"eventName":"New Coupon","eventDescription":"Triggeres when you add a new Stripe coupon."})
    // Events.insert({"serviceId": stripesrc ,"eventName":"New Charge","eventDescription":"Triggeres when someones credit card is charged."})
    // Events.insert({"serviceId": stripesrc ,"eventName":"New Plan","eventDescription":"Triggeres when you add a new Stripe plan."})
    // Events.insert({"serviceId": stripesrc ,"eventName":"New Event","eventDescription":"Triggeres when new event is added."})
    // Events.insert({"serviceId": stripesrc ,"eventName":"New Invoice Item","eventDescription":"Triggeres when new invoice item is listed."})


  var fbtrg  = Services.insert({serviceName: "Facebook",serviceType: "target",serviceAlias: "facebook",serviceAuthType: "OAuth2"})
      Actions.insert({"serviceId": fbtrg,"actionName":"Post Video to Timeline","actionDescription":"Create a new video post on your timeline."})

      Actions.insert({"serviceId": fbtrg,"actionName":"Post to Timeline","actionDescription":"Create a new post on your timeline. Use this for sharing status updates and links."})

      Actions.insert({"serviceId": fbtrg,"actionName":"Post Photo to Timeline","actionDescription":"Create a new photo post on your timeline."})

  var gdrivetrg = Services.insert({serviceName: "Google Drive",serviceType: "target",serviceAlias: "google drive",serviceAuthType: "OAuth2"})

      Actions.insert({"serviceId": gdrivetrg,"actionName":"New Folder","actionDescription":"Create a new, empty folder."})
      Actions.insert({"serviceId": gdrivetrg,"actionName":"Copy File from Trigger","actionDescription":"Copies a new file from the trigger service."})
      Actions.insert({"serviceId": gdrivetrg,"actionName":"Create File from Text","actionDescription":"Create a new file from plain text."})


  var gmailtrg = Services.insert({serviceName: "Gmail",serviceType: "target",serviceAlias: "gmail",serviceAuthType: "OAuth2"})
      Actions.insert({"serviceId": gmailtrg,"actionName":"Create Draft","actionDescription":"Creates a plaintext draft email in Gmail."})
      Actions.insert({"serviceId": gmailtrg,"actionName":"Send Email","actionDescription":"Sends a plaintext email from your Gmail account. Only 500 emails per day allowed by Gmail."})
      Actions.insert({"serviceId": gmailtrg,"actionName":"Create Label","actionDescription":"Creates a new label in Gmail."})


  var dropboxtrg = Services.insert({serviceName: "DropBox",serviceType: "target", serviceAlias: "dropbox",serviceAuthType: "OAuth2"})

      Actions.insert({"serviceId": dropboxtrg,"actionName":"Create Folder","actionDescription":"Creates a brand new folder at the path you specify."})
      Actions.insert({"serviceId": dropboxtrg,"actionName":"Append Text File","actionDescription":"Adds a new line to a text file."})
      Actions.insert({"serviceId": dropboxtrg,"actionName":"Copy File from Trigger","actionDescription":"Copy an already-existing file or attachment from the trigger service."})
      Actions.insert({"serviceId": dropboxtrg,"actionName":"Create Text File","actionDescription":"Creates a brand new text file from plain text content you specify."})

  var twittertrg = Services.insert({serviceName: "Twitter",serviceType: "target",serviceAlias: "twitter",serviceAuthType: null})
      Actions.insert({"serviceId": twittertrg,"actionName":"Create Tweet","actionDescription":"Creates a tweet, though it will limit to 10 per hour."})
      Actions.insert({"serviceId": twittertrg,"actionName":"Create Image Tweet","actionDescription":"Creates a tweet with an image, though it will limit to 10 per hour."})

  var asanatrg = Services.insert({serviceName: "Asana",serviceType: "target",serviceAlias: "asana",serviceAuthType: "BasicAuth"})
    Actions.insert({"serviceId": asanatrg,"actionName":"Create Project","actionDescription":"Adds a new project."})
    Actions.insert({"serviceId": asanatrg,"actionName":"Create Story","actionDescription":"Adds a new story."})
    Actions.insert({"serviceId": asanatrg,"actionName":"Create Task","actionDescription":"Adds a new task."})

  var googlecaltrg = Services.insert({serviceName: "Google Calendar",serviceType: "target", serviceAlias: "google calendar",serviceAuthType: "OAuth2"})
    Actions.insert({"serviceId": googlecaltrg,"actionName":"New Detailed Event","actionDescription":"Create an event by defining each field."})
    Actions.insert({"serviceId": googlecaltrg,"actionName":"Quick Add Event","actionDescription":"Create an event from a piece of text. Google parses the text for date, time, and description info."})

  var basecamptrg = Services.insert({serviceName: "Basecamp",serviceType: "target", serviceAlias: "basecamp",serviceAuthType: "OAuth2"})
    Actions.insert({"serviceId": basecamptrg,"actionName":"New Detailed Event","actionDescription":"Create an event by defining each field."})
    // Actions.insert({"serviceId": googlecaltrg,"actionName":"Quick Add Event","actionDescription":"Create an event from a piece of text. Google parses the text for date, time, and description info."})

  // var stripetrg = Services.insert({serviceName: "Stripe",serviceType: "source",serviceAlias: "stripe"})
  //   Actions.insert({"serviceId": stripesrc ,"eventName":"New Customer","eventDescription":"Triggeres when a new customer is added."})
  //   Actions.insert({"serviceId": stripesrc ,"eventName":"New Coupon","eventDescription":"Triggeres when you add a new Stripe coupon."})
  //   Actions.insert({"serviceId": stripesrc ,"eventName":"New Charge","eventDescription":"Triggeres when someones credit card is charged."})
  //   Actions.insert({"serviceId": stripesrc ,"eventName":"New Plan","eventDescription":"Triggeres when you add a new Stripe plan."})
  //   Actions.insert({"serviceId": stripesrc ,"eventName":"New Event","eventDescription":"Triggeres when new event is added."})
  //   Actions.insert({"serviceId": stripesrc ,"eventName":"New Invoice Item","eventDescription":"Triggeres when new invoice item is listed."})

}
