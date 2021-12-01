const {
  aitFFIWrapAggregate: wrapAggregate,
  aitFFIWrapValue: wrap,
  aitFFIUnwrapValue: unwrap,
  aitFFI__F
} = require('ait-lang/ffi');

function strsplit(splitter, str) {
  return wrapAggregate(unwrap(str).split(unwrap(splitter)).map(wrap));
}

function strjoin(joiner, aggr) {
  return wrap(unwrap(aggr).body.map(unwrap).reverse().join(unwrap(joiner)));
}

function str2int(str) {
  return wrap(parseInt(unwrap(str), 10))
}

function trim(str) {
  return wrap(unwrap(str).trim())
}

function newline() {
  return wrap('\n')
}

module.exports = {
  strsplit: aitFFI__F(2, 'strsplit', strsplit),
  strjoin: aitFFI__F(2, 'strjoin', strjoin),
  str2int: aitFFI__F(1, 'str2int', str2int),
  trim: aitFFI__F(1, 'trim', trim),
  newline: aitFFI__F(0, 'newline', newline)
}