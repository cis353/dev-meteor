Template.footer.status_image = function(){
  if (Meteor.status().connected){
    return "/images/online.png";
  }else{
    return "/images/offline.png";
  }
}