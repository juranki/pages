function(newDoc,oldDoc,userCtx) {
  var permChecker = require("lib/permissions");
  
  if(!permChecker.hasPermission(userCtx,this.couchapp.permissions.editor)) {
    throw({forbidden:"You don't have editor permission"});
  }
}