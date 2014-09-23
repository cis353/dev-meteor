Router.map(function(){
  this.route('code', {
    path: '/code/:_id',
    controller: 'BaseController',
    waitOn: function(){
      return Meteor.subscribe('records', this.params._id);
    },
    onBeforeAction: function(){

    },
    data: function(){
      return Records.findOne(this.params._id);
    },
    action: function(){
      this.render();
    }
  });
});

Template.code.rendered = function(){
  var templateEditor = ace.edit("templateEditor");
  templateEditor.setTheme("ace/theme/monokai");
  templateEditor.getSession().setMode("ace/mode/html");
  templateEditor.getSession().setTabSize(2);
  templateEditor.getSession().on('change', function(){
    Records.update(Router.current().params._id, { $set: { _template: templateEditor.getValue() }});
  });

  var eventsEditor = ace.edit("eventsEditor");
  eventsEditor.setTheme("ace/theme/monokai");
  eventsEditor.getSession().setMode("ace/mode/javascript");
  eventsEditor.getSession().setTabSize(2);
  eventsEditor.getSession().on('change', function(){
    Records.update(Router.current().params._id, { $set: { _events: eventsEditor.getValue() }});
  });

  var helpersEditor = ace.edit("helpersEditor");
  helpersEditor.setTheme("ace/theme/monokai");
  helpersEditor.getSession().setMode("ace/mode/javascript");
  helpersEditor.getSession().setTabSize(2);
  helpersEditor.getSession().on('change', function(){
    Records.update(Router.current().params._id, { $set: { _helpers: helpersEditor.getValue() }});
  });

  var renderedEditor = ace.edit("renderedEditor");
  renderedEditor.setTheme("ace/theme/monokai");
  renderedEditor.getSession().setMode("ace/mode/javascript");
  renderedEditor.getSession().setTabSize(2);
  renderedEditor.getSession().on('change', function(){
    Records.update(Router.current().params._id, { $set: { _rendered: renderedEditor.getValue() }});
  });

  var createdEditor = ace.edit("createdEditor");
  createdEditor.setTheme("ace/theme/monokai");
  createdEditor.getSession().setMode("ace/mode/javascript");
  createdEditor.getSession().setTabSize(2);
  createdEditor.getSession().on('change', function(){
    Records.update(Router.current().params._id, { $set: { _created: createdEditor.getValue() }});
  });

  var destroyedEditor = ace.edit("destroyedEditor");
  destroyedEditor.setTheme("ace/theme/monokai");
  destroyedEditor.getSession().setMode("ace/mode/javascript");
  destroyedEditor.getSession().setTabSize(2);
  destroyedEditor.getSession().on('change', function(){
    Records.update(Router.current().params._id, { $set: { _destroyed: destroyedEditor.getValue() }});
  });
};
