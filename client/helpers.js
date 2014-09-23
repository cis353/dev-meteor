//global helper to pull data from the DB
UI.registerHelper('data', function(_id, field){
  var record = Records.findOne(_id);
  if (record){
    return record[field];
  }else{
    return '';
  }
});

UI.registerHelper('session',function(input){
  return Session.get(input);
});

UI.registerHelper('param',function(input){
  return Router.current().params[input];
});

UI.registerHelper('params',function(input){
  return Router.current().params;
});

UI.registerHelper('template', function(){
  if (this.window) return;
  console.log('UI.template helper: ' + this);
  //return Template.test;

  //return 'this is a test template';
  var _id = '';
  if (this._id){
    _id = this._id;
  //}else if (typeof(this)=='object') {
  //  return null;
  }else{
    _id = this.toString();
  }

  var record = Records.findOne(_id);
  if (record){
    console.log('path: record found ' + record._id);
    if (record._template){
      delete Template[record._id];
      Template.__define__(record._id, eval(Compiler.compile(record._template)));
    }else{
      return Template.invalidTemplate;
    }
    //attach the events to this template if there are any
    if (record._events){
      try {
        var events = null;
        eval('var events = ' + record._events);
        Template[record._id].events(events);
      }catch(error){
        console.log(record._id + 'error loading events');
      }
    }
    if (record._helpers){
      try {
        var helpers = null;
        eval('var helpers = ' + record._helpers);
        Template[record._id].helpers(helpers);
      }catch(error){
        console.log(record._id + 'error loading helpers');
      }
    }
    if (record._rendered){
      try{
        var rendered = null;
        eval('var rendered = function(){ ' + record._rendered + '}');
        Template[record._id].rendered = rendered;
      }catch(error){
        console.log(record._id + 'error loading rendered');
      }
    }
    if (record._created){
      try{
        var created = null;
        eval('var created = function(){ ' + record._created + '}');
        Template[record._id].created = created;
      }catch(error){
        console.log(record._id + 'error loading created');
      }
    }
    if (record._destroyed){
      try{
        var destroyed = null;
        eval('var destroyed = function(){ ' + record._destroyed + '}');
        Template[record._id].destroyed = destroyed;
      }catch(error){
        console.log(record._id + 'error loading destroyed');
      }
    }
    return Template[record._id];
  }else{
    return null;
  }
});

UI.registerHelper('layout', function(){
  console.log('layout helper called');
  if (Session.get('layout')){
    console.log('layout helper: customLayout: ' + Session.get('layout'));
    if (Template[Session.get('layout')]){
      return Template[Session.get('layout')];
    }else{
      return Template.noLayout;
    }
  }else{
    console.log('layout helper: mainLayout');
    return Template.main;
  }
});

UI.registerHelper('arrayify',function(obj){
  result = [];
  for (var key in obj) result.push({name:key,value:obj[key]});
  return result;
});



// Determine if current link should be active
UI.registerHelper('active', function(path) {
	//console.log(Session.get('path'));
    return Router.current().path == path ? 'active' : '';
});

UI.registerHelper('removesidebar', function() {
    
	var current = Router.current().path;
	//console.log(pages_without_sidebar.indexOf(current));
	
	if (current == '/addpage') {
		return 'no-sidebar';	
	}
	
});