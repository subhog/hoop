GLOBAL.$extends = function(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
  child.prototype.super = parent.prototype;
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


