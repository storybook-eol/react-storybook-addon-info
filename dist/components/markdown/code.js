'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blockquote = exports.Pre = exports.Code = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = exports.Code = function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  _createClass(Code, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.highlight();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.highlight();
    }
  }, {
    key: 'highlight',
    value: function highlight() {
      if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var codeStyle = {
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        backgroundColor: '#fafafa'
      };

      var preStyle = {
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        backgroundColor: '#fafafa',
        padding: '.5rem',
        lineHeight: 1.5,
        overflowX: 'scroll'
      };

      var className = this.props.language ? 'language-' + this.props.language : '';

      return _react2.default.createElement(
        'pre',
        { style: preStyle, className: className },
        _react2.default.createElement(
          'code',
          { style: codeStyle, className: className },
          this.props.code
        )
      );
    }
  }]);

  return Code;
}(_react2.default.Component);

var Pre = exports.Pre = function (_React$Component2) {
  _inherits(Pre, _React$Component2);

  function Pre() {
    _classCallCheck(this, Pre);

    return _possibleConstructorReturn(this, (Pre.__proto__ || Object.getPrototypeOf(Pre)).apply(this, arguments));
  }

  _createClass(Pre, [{
    key: 'render',
    value: function render() {
      var style = {
        fontSize: '.88em',
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        backgroundColor: '#fafafa',
        padding: '.5rem',
        lineHeight: 1.5,
        overflowX: 'scroll'
      };

      return _react2.default.createElement(
        'pre',
        { style: style },
        this.props.children
      );
    }
  }]);

  return Pre;
}(_react2.default.Component);

var Blockquote = exports.Blockquote = function (_React$Component3) {
  _inherits(Blockquote, _React$Component3);

  function Blockquote() {
    _classCallCheck(this, Blockquote);

    return _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
  }

  _createClass(Blockquote, [{
    key: 'render',
    value: function render() {
      var style = {
        fontSize: '1.88em',
        fontFamily: 'Menlo, Monaco, "Courier New", monospace',
        borderLeft: '8px solid #fafafa',
        padding: '1rem'
      };

      return _react2.default.createElement(
        'blockquote',
        { style: style },
        this.props.children
      );
    }
  }]);

  return Blockquote;
}(_react2.default.Component);