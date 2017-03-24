'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropVal = require('./PropVal');

var _PropVal2 = _interopRequireDefault(_PropVal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Props = function (_React$Component) {
  _inherits(Props, _React$Component);

  function Props() {
    _classCallCheck(this, Props);

    return _possibleConstructorReturn(this, (Props.__proto__ || Object.getPrototypeOf(Props)).apply(this, arguments));
  }

  _createClass(Props, [{
    key: 'render',
    value: function render() {
      var props = this.props.node.props;
      var storyStylesheet = this.context.storyStylesheet;

      var defaultProps = this.props.node.type.defaultProps;
      if (!props || (typeof props === 'undefined' ? 'undefined' : _typeof(props)) !== 'object') {
        return _react2.default.createElement('span', null);
      }

      var _storyStylesheet$Prop = storyStylesheet.Props,
          propStyle = _storyStylesheet$Prop.propStyle,
          propValueStyle = _storyStylesheet$Prop.propValueStyle,
          propNameStyle = _storyStylesheet$Prop.propNameStyle;


      var names = Object.keys(props).filter(function (name) {
        return name[0] !== '_' && name !== 'children' && (!defaultProps || props[name] != defaultProps[name]);
      });

      var breakIntoNewLines = names.length > 3;
      var endingSpace = this.props.singleLine ? ' ' : '';

      var items = [];
      names.forEach(function (name, i) {
        items.push(_react2.default.createElement(
          'span',
          { key: name },
          breakIntoNewLines ? _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('br', null),
            '\xA0\xA0'
          ) : ' ',
          _react2.default.createElement(
            'span',
            { style: propNameStyle },
            name
          ),
          (!props[name] || typeof props[name] !== 'boolean') && _react2.default.createElement(
            'span',
            null,
            '=',
            _react2.default.createElement(
              'span',
              { style: propValueStyle },
              _react2.default.createElement(_PropVal2.default, { val: props[name] })
            )
          ),
          i === names.length - 1 && (breakIntoNewLines ? _react2.default.createElement('br', null) : endingSpace)
        ));
      });

      return _react2.default.createElement(
        'span',
        null,
        items
      );
    }
  }]);

  return Props;
}(_react2.default.Component);

Props.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};
exports.default = Props;