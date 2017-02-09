'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCreateFragment = require('react-addons-create-fragment');

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function previewArray(val, stylesheet) {
  var items = {};
  val.slice(0, 3).forEach(function (item, i) {
    items['n' + i] = _react2.default.createElement(PropVal, { val: item });
    items['c' + i] = ', ';
  });
  if (val.length > 3) {
    items.last = '…';
  } else {
    delete items['c' + (val.length - 1)];
  }
  return _react2.default.createElement(
    'span',
    { style: stylesheet.array },
    '[',
    (0, _reactAddonsCreateFragment2.default)(items),
    ']'
  );
}

function previewObject(val, stylesheet) {
  var names = Object.keys(val);
  var items = {};
  names.slice(0, 3).forEach(function (name, i) {
    items['k' + i] = _react2.default.createElement(
      'span',
      { style: stylesheet.attr },
      name
    );
    items['c' + i] = ': ';
    items['v' + i] = _react2.default.createElement(PropVal, { val: val[name] });
    items['m' + i] = ', ';
  });
  if (names.length > 3) {
    items.rest = '…';
  } else {
    delete items['m' + (names.length - 1)];
  }
  return _react2.default.createElement(
    'span',
    { style: stylesheet.object },
    '{',
    (0, _reactAddonsCreateFragment2.default)(items),
    '}'
  );
}

function previewProp(val, stylesheet) {
  var braceWrap = true;
  var content = null;
  if (typeof val === 'number') {
    content = _react2.default.createElement(
      'span',
      { style: stylesheet.number },
      val
    );
  } else if (typeof val === 'string') {
    if (val.length > 50) {
      val = val.slice(0, 50) + '…';
    }
    content = _react2.default.createElement(
      'span',
      { style: stylesheet.string },
      '"',
      val,
      '"'
    );
    braceWrap = false;
  } else if (typeof val === 'boolean') {
    content = _react2.default.createElement(
      'span',
      { style: stylesheet.bool },
      '' + val
    );
  } else if (Array.isArray(val)) {
    content = previewArray(val, stylesheet);
  } else if (typeof val === 'function') {
    content = _react2.default.createElement(
      'span',
      { style: stylesheet.func },
      val.name ? val.name + '()' : 'anonymous()'
    );
  } else if (!val) {
    content = _react2.default.createElement(
      'span',
      { style: stylesheet.empty },
      '' + val
    );
  } else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object') {
    content = _react2.default.createElement(
      'span',
      null,
      '\u2026'
    );
  } else if (_react2.default.isValidElement(val)) {
    content = _react2.default.createElement(
      'span',
      { style: stylesheet.object },
      '<' + (val.type.displayName || val.type.name || val.type) + ' />'
    );
  } else {
    content = previewObject(val, stylesheet);
  }

  if (!braceWrap) return content;
  return _react2.default.createElement(
    'span',
    null,
    '{',
    content,
    '}'
  );
}

var PropVal = function (_React$Component) {
  _inherits(PropVal, _React$Component);

  function PropVal() {
    _classCallCheck(this, PropVal);

    return _possibleConstructorReturn(this, (PropVal.__proto__ || Object.getPrototypeOf(PropVal)).apply(this, arguments));
  }

  _createClass(PropVal, [{
    key: 'render',
    value: function render() {
      return previewProp(this.props.val, this.context.storyStylesheet.PropVal);
    }
  }]);

  return PropVal;
}(_react2.default.Component);

PropVal.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};
exports.default = PropVal;


module.exports = PropVal;