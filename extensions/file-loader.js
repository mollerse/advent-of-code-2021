const fs = require('fs')

const {
  aitFFIWrapAggregate: wrapAggregate,
  aitFFIWrapValue: wrap,
  aitFFIUnwrapValue: unwrap,
  aitFFI__F
} = require('ait-lang/ffi');

function readfile(fname) {
  let fileToLoad = unwrap(fname)
  let content = fs.readFileSync(fileToLoad, 'utf-8')
  return wrap(content);
}

module.exports = {
  readfile: aitFFI__F(1, 'readfile', readfile)
}