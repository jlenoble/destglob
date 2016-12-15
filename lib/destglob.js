'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = destglob;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function singleDestglob(glb, dest) {
  var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : process.cwd();

  var a = glb.split('**');
  a[0] = _path2.default.join(dest, _path2.default.relative(base, a[0]));

  if (a.length === 1) {
    return a[0];
  } else {
    return _path2.default.join(a[0], '**', a[1]);
  }
}

function destglob(glob, dest) {
  if (Array.isArray(glob)) {
    return glob.map(function (glb) {
      return singleDestglob(glb, dest);
    });
  }
  return [singleDestglob(glob, dest)];
}
module.exports = exports['default'];