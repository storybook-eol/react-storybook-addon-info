'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H1 = exports.H1 = function H1(_ref) {
  var id = _ref.id,
      children = _ref.children;

  var styles = (0, _extends3.default)({}, _theme.baseFonts, {
    borderBottom: '1px solid #eee',
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '40px'
  });

  return _react2.default.createElement(
    'h1',
    { id: id, style: styles },
    children
  );
};

var H2 = exports.H2 = function H2(_ref2) {
  var id = _ref2.id,
      children = _ref2.children;

  var styles = (0, _extends3.default)({}, _theme.baseFonts, {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '30px'
  });

  return _react2.default.createElement(
    'h2',
    { id: id, style: styles },
    children
  );
};

var H3 = exports.H3 = function H3(_ref3) {
  var id = _ref3.id,
      children = _ref3.children;

  var styles = (0, _extends3.default)({}, _theme.baseFonts, {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '22px',
    textTransform: 'uppercase'
  });

  return _react2.default.createElement(
    'h3',
    { id: id, style: styles },
    children
  );
};

var H4 = exports.H4 = function H4(_ref4) {
  var id = _ref4.id,
      children = _ref4.children;

  var styles = (0, _extends3.default)({}, _theme.baseFonts, {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '20px'
  });

  return _react2.default.createElement(
    'h4',
    { id: undefined.props.id, style: styles },
    undefined.props.children
  );
};

var H5 = exports.H5 = function H5(_ref5) {
  var id = _ref5.id,
      children = _ref5.children;

  var styles = (0, _extends3.default)({}, _theme.baseFonts, {
    fontWeight: 600,
    margin: 0,
    padding: 0,
    fontSize: '18px'
  });

  return _react2.default.createElement(
    'h5',
    { id: id, style: styles },
    children
  );
};

var H6 = exports.H6 = function H6(_ref6) {
  var id = _ref6.id,
      children = _ref6.children;

  var styles = (0, _extends3.default)({}, _theme.baseFonts, {
    fontWeight: 400,
    margin: 0,
    padding: 0,
    fontSize: '18px'
  });

  return _react2.default.createElement(
    'h6',
    { id: undefined.props.id, style: styles },
    undefined.props.children
  );
};