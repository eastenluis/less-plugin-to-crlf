module.exports = function(less) {
  const LineEndingRegExp = /\r\n|\n|\r/g;

  function ToCRLFProcessor(options) {
    this.options = options
  }

  ToCRLFProcessor.prototype = {
    process: function(css, extra) {
      return css.replace(LineEndingRegExp, '\r\n');
    }
  };

  return ToCRLFProcessor;
};