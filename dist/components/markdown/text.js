'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = exports.UL = exports.LI = exports.P = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var P = exports.P = function (_React$Component) {
  _inherits(P, _React$Component);

  function P() {
    _classCallCheck(this, P);

    return _possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
  }

  _createClass(P, [{
    key: 'render',
    value: function render() {
      var style = _extends({}, this.context.storyStylesheet.baseFont, {
        fontSize: '15px'
      });
      return _react2.default.createElement(
        'p',
        { style: style },
        this.props.children
      );
    }
  }]);

  return P;
}(_react2.default.Component);

P.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};

var LI = exports.LI = function (_React$Component2) {
  _inherits(LI, _React$Component2);

  function LI() {
    _classCallCheck(this, LI);

    return _possibleConstructorReturn(this, (LI.__proto__ || Object.getPrototypeOf(LI)).apply(this, arguments));
  }

  _createClass(LI, [{
    key: 'render',
    value: function render() {
      var style = _extends({}, this.context.storyStylesheet.baseFont, {
        fontSize: '15px'
      });
      return _react2.default.createElement(
        'li',
        { style: style },
        this.props.children
      );
    }
  }]);

  return LI;
}(_react2.default.Component);

LI.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};

var UL = exports.UL = function (_React$Component3) {
  _inherits(UL, _React$Component3);

  function UL() {
    _classCallCheck(this, UL);

    return _possibleConstructorReturn(this, (UL.__proto__ || Object.getPrototypeOf(UL)).apply(this, arguments));
  }

  _createClass(UL, [{
    key: 'render',
    value: function render() {
      var style = _extends({}, this.context.storyStylesheet.baseFont, {
        fontSize: '15px'
      });

      return _react2.default.createElement(
        'ul',
        { style: style },
        this.props.children
      );
    }
  }]);

  return UL;
}(_react2.default.Component);

UL.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};

var A = exports.A = function (_React$Component4) {
  _inherits(A, _React$Component4);

  function A() {
    _classCallCheck(this, A);

    return _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).apply(this, arguments));
  }

  _createClass(A, [{
    key: 'render',
    value: function render() {
      var style = {
        color: '#3498db'
      };

      return _react2.default.createElement(
        'a',
        { href: this.props.href, style: style },
        this.props.children
      );
    }
  }]);

  return A;
}(_react2.default.Component);