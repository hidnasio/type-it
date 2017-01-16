var Plugin = require('broccoli-plugin');
var path = require('path');
var fs = require('fs');
var jsYamlFront = require('./js-yaml-front');
var descriptionFile = 'index.md';
var outputFileName = 'activities.json';
var contentKey = 'content';

module.exports = ActivityParser;

function ActivityParser(inputNode, options) {
  options = options || {};
  Plugin.call(this, [inputNode], {
    annotation: options.annotation
  });
  this.options = options;
}

ActivityParser.prototype = Object.create(Plugin.prototype);
ActivityParser.prototype.constructor = ActivityParser;

ActivityParser.prototype.build = function() {
  var outputBuffer = {};
  var contentDir = this.inputPaths[0];
  var outputFile = path.join(this.outputPath, outputFileName);

  outputBuffer = this.parse(contentDir);

  fs.writeFileSync(outputFile, JSON.stringify(outputBuffer));
};

ActivityParser.prototype.parse = function(targetPath) {
  var outputBuffer = {};

  if (fs.lstatSync(targetPath).isFile()) {
    outputBuffer = jsYamlFront.loadFront(targetPath, contentKey);
  } else {

    if (fs.existsSync(path.join(targetPath, descriptionFile))) {
      outputBuffer = this.parse(path.join(targetPath, descriptionFile));
    }

    outputBuffer.children = [];

    var childrenPaths = fs.readdirSync(targetPath);

    childrenPaths.forEach((childrenPath) => {
      if (childrenPath !== descriptionFile) {
        var childrenFullPath = path.join(targetPath, childrenPath);
        outputBuffer.children.push(this.parse(childrenFullPath));
      }
    });
  }

  return outputBuffer;
}
