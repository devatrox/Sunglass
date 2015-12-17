var sunglass = require("./index");

module.exports = function(eyeglass, sass) {
  return {
    sassDir: sunglass.includePaths[0]
  };
};
