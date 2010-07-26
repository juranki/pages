function(e, profile, userCtx) {
  var app = $$(this).app;
  var permChecker = app.require("lib/permissions");
  var editorRules = app.ddoc.couchapp.permissions.editor;
  var isEditor = permChecker.hasPermission(userCtx,editorRules);
  return $.extend({},
		  profile,
		  {is_editor: isEditor});
}