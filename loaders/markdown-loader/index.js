// mix jsx and markdown
// https://github.com/osnr/markdown-it-jsx/blob/master/example/render.js

var SignalwerkDocMd = require('signalwerk.documentation.md');
var loaderUtils = require('loader-utils');
var frontMatter = require('front-matter')
var objectAssign = require('object-assign')

module.exports = function (content) {
  this.cacheable()

  const query = loaderUtils.parseQuery(this.query)
  const linkPrefix = query.config.linkPrefix || ''
  const shouldPrefix = query.shouldPrefix
  const meta = frontMatter(content)

  let body = null;

  if (shouldPrefix){
    body = new SignalwerkDocMd.default({
      rootPath: './pages/',
      linkPrefix: linkPrefix
    }).render(meta.body);
  } else {
    body = new SignalwerkDocMd.default({
      rootPath: './pages/',
    }).render(meta.body);
  }
  const result = objectAssign({}, meta.attributes, {
    body,
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
