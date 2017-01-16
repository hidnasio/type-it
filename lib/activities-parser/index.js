/*jshint node:true*/
module.exports = {
  name: 'activities-parser',

  isDevelopingAddon: function() {
    return true;
  },

  treeForPublic: function() {
    var Parser = require('./lib/broccoli-activity-parser.js');

    return new Parser('activities');
  }
};
