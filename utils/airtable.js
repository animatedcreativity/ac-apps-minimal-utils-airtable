exports = module.exports = function() {
  var mod = {
    getOptions: function(options, prefix) {
      var list = {};
      for (var key in options) {
        if (key.split(prefix + "Airtable").length > 1) {
          list[app.camelCase(key.split(prefix).pop())] = options[key];
        }
      }
      return list;
    }
  };
  return mod;
}