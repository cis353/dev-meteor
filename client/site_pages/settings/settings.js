Router.map(function(){
  this.route('settings', { controller: 'RequireAuth', renderTemplates: { 'settings_sidebar': { to: 'sidebar' }}});
  this.route('settings/profile', { controller: 'RequireAuth', renderTemplates: { 'settings_sidebar': { to: 'sidebar' }}});
  this.route('settings/types', { controller: 'RequireAuth', renderTemplates: { 'settings_sidebar': { to: 'sidebar' }}});
  this.route('settings/billing', { controller: 'RequireAuth', renderTemplates: { 'settings_sidebar': { to: 'sidebar' }}});
  this.route('settings/addresses', { controller: 'RequireAuth', renderTemplates: { 'settings_sidebar': { to: 'sidebar' }}});
  this.route('settings/applications', { controller: 'RequireAuth', renderTemplates: { 'settings_sidebar': { to: 'sidebar' }}});
  this.route('settings/groups', { controller: 'RequireAuth', renderTemplates: { 'settings_sidebar': { to: 'sidebar' }}});
});