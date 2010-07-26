// If at least one allow rule and zero deny rules match -> true
// Otherwise -> false
function hasPermission(userCtx,rules) {
  var result = false;
  function isMatch(rule) {
    if(rule.any) return true;
    if(rule.authenticated && userCtx.name) return true;
    if(rule.name) return rule.name == userCtx.name;
    if(rule.role) {
      for(var i = 0; i < userCtx.roles.length; i++) {
	if(userCtx.roles[i] == rule.role) return true;
      }
    }
    return false;
  }
  for(var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    if(isMatch(rule)){
      if(rule.deny) return false;
      if(rule.allow) result = true;
    }
  }
  return result;
}

exports.hasPermission = hasPermission;
