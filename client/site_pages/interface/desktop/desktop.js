Template['interface/desktop'].rendered = function(){
  $(".gridster ul").gridster({
    widget_margins: [10, 10],
    widget_base_dimensions: [128, 128]
  });
};

Template['interface/desktop'].events({
  'click .gridster li': function(){
    //alert('hey!');

  }
});