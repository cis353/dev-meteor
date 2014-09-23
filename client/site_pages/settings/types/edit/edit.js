Router.map(function(){
  this.route('settings/types/edit', {
    path: '/settings/types/edit/:type',
    controller: 'RequireAuth',
    renderTemplates: { 'settings_sidebar': { to: 'sidebar' }},
    data: function(){
      console.log('/settings/types/edit/' + this.params.type);
      return {
        'type': this.params.type
      };
    }
  });
});