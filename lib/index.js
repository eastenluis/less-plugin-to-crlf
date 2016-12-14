var getToCRLFProcessor = require('./to-crlf-processor.js');

function LessPluginToCRLF(options) {
  this.options = options;
}

LessPluginToCRLF.prototype = {
  install: function(less, pluginManager) {
    var ToCRLFProcessor = getToCRLFProcessor(less);
    pluginManager.addPostProcessor(new ToCRLFProcessor(this.options));
  },
  printUsage: function() {
    console.log('');
    console.log('To CRLF Plugin');
    console.log('Specify plugin with --to-crlf');
    console.log('');
  },
  setOptions: function(options) {
    this.options = options;
  }
};

module.exports = LessPluginToCRLF;