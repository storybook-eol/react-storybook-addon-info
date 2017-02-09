'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H1 = exports.H1 = function (_React$Component) {
  _inherits(H1, _React$Component);

  function H1() {
    _classCallCheck(this, H1);

    return _possibleConstructorReturn(this, (H1.__proto__ || Object.getPrototypeOf(H1)).apply(this, arguments));
  }

  _createClass(H1, [{
    key: 'render',
    value: function render() {
      var styles = _extends({}, this.context.storyStylesheet.baseFont, {
        borderBottom: '1px solid #eee',
        fontWeight: 600,
        margin: 0,
        padding: 0,
        fontSize: '40px'
      });

      return _react2.default.createElement(
        'h1',
        { id: this.props.id, style: styles },
        this.props.children
      );
    }
  }]);

  return H1;
}(_react2.default.Component);

H1.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};

var H2 = exports.H2 = function (_React$Component2) {
  _inherits(H2, _React$Component2);

  function H2() {
    _classCallCheck(this, H2);

    return _possibleConstructorReturn(this, (H2.__proto__ || Object.getPrototypeOf(H2)).apply(this, arguments));
  }

  _createClass(H2, [{
    key: 'render',
    value: function render() {
      var styles = _extends({}, this.context.storyStylesheet.baseFont, {
        fontWeight: 600,
        margin: 0,
        padding: 0,
        fontSize: '30px'
      });

      return _react2.default.createElement(
        'h2',
        { id: this.props.id, style: styles },
        this.props.children
      );
    }
  }]);

  return H2;
}(_react2.default.Component);

H2.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};

var H3 = exports.H3 = function (_React$Component3) {
  _inherits(H3, _React$Component3);

  function H3() {
    _classCallCheck(this, H3);

    return _possibleConstructorReturn(this, (H3.__proto__ || Object.getPrototypeOf(H3)).apply(this, arguments));
  }

  _createClass(H3, [{
    key: 'render',
    value: function render() {
      var styles = _extends({}, this.context.storyStylesheet.baseFont, {
        fontWeight: 600,
        margin: 0,
        padding: 0,
        fontSize: '22px',
        textTransform: 'uppercase'
      });

      return _react2.default.createElement(
        'h3',
        { id: this.props.id, style: styles },
        this.props.children
      );
    }
  }]);

  return H3;
}(_react2.default.Component);

H3.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};

var H4 = exports.H4 = function (_React$Component4) {
  _inherits(H4, _React$Component4);

  function H4() {
    _classCallCheck(this, H4);

    return _possibleConstructorReturn(this, (H4.__proto__ || Object.getPrototypeOf(H4)).apply(this, arguments));
  }

  _createClass(H4, [{
    key: 'render',
    value: function render() {
      var styles = _extends({}, this.context.storyStylesheet.baseFont, {
        fontWeight: 600,
        margin: 0,
        padding: 0,
        fontSize: '20px'
      });

      return _react2.default.createElement(
        'h4',
        { id: this.props.id, style: styles },
        this.props.children
      );
    }
  }]);

  return H4;
}(_react2.default.Component);

H4.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};

var H5 = exports.H5 = function (_React$Component5) {
  _inherits(H5, _React$Component5);

  function H5() {
    _classCallCheck(this, H5);

    return _possibleConstructorReturn(this, (H5.__proto__ || Object.getPrototypeOf(H5)).apply(this, arguments));
  }

  _createClass(H5, [{
    key: 'render',
    value: function render() {
      var styles = _extends({}, this.context.storyStylesheet.baseFont, {
        fontWeight: 600,
        margin: 0,
        padding: 0,
        fontSize: '18px'
      });

      return _react2.default.createElement(
        'h5',
        { id: this.props.id, style: styles },
        this.props.children
      );
    }
  }]);

  return H5;
}(_react2.default.Component);

H5.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};

var H6 = exports.H6 = function (_React$Component6) {
  _inherits(H6, _React$Component6);

  function H6() {
    _classCallCheck(this, H6);

    return _possibleConstructorReturn(this, (H6.__proto__ || Object.getPrototypeOf(H6)).apply(this, arguments));
  }

  _createClass(H6, [{
    key: 'render',
    value: function render() {
      var styles = _extends({}, this.context.storyStylesheet.baseFont, {
        fontWeight: 400,
        margin: 0,
        padding: 0,
        fontSize: '18px'
      });

      return _react2.default.createElement(
        'h6',
        { id: this.props.id, style: styles },
        this.props.children
      );
    }
  }]);

  return H6;
}(_react2.default.Component);

H6.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};