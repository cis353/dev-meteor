Template['interface/list'].rendered = function(){
  $(".gridsterlist ul").gridster({
    widget_margins: [10, 0],
    widget_base_dimensions: [128, 40]
  });
};

Template['interface/list'].events({
  'click .gridsterlist li': function(){
    //alert('hey!');

  }
});