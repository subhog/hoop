GLOBAL.$extends = function(child, parent) {
  child.prototype = new parent;
  child.prototype.constructor = child;
  child.prototype.super = parent.prototype;
  for (var key in parent)
    child[key] = parent[key];
}

GLOBAL.$functions = function(f, object) {
  for(var key in object) {
    f.prototype[key] = object[key];   
  }
}

GLOBAL.$statics = function(f, object) {
  for(var key in object) {
    f[key] = object[key];   
  }
}


