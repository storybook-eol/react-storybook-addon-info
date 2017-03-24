'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _merge3 = require('lodash/merge');

var _merge4 = _interopRequireDefault(_merge3);

var _Props = require('./Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Node = function (_React$Component) {
  _inherits(Node, _React$Component);

  function Node(props) {
    _classCallCheck(this, Node);

    return _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this, props));
  }

  _createClass(Node, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          node = _props.node,
          depth = _props.depth;
      var storyStylesheet = this.context.storyStylesheet;

      var _merge2 = (0, _merge4.default)({}, storyStylesheet.Node),
          tagStyle = _merge2.tagStyle,
          containerStyle = _merge2.containerStyle;

      var leftPad = {
        paddingLeft: 3 + (depth + 1) * 15,
        paddingRight: 3
      };

      Object.assign(containerStyle, leftPad);

      var _getData = getData(node),
          name = _getData.name,
          text = _getData.text,
          children = _getData.children;

      // Just text


      if (!name) {
        return _react2.default.createElement(
          'div',
          { style: containerStyle },
          _react2.default.createElement(
            'span',
            { style: tagStyle },
            text
          )
        );
      }

      // Single-line tag
      if (!children) {
        return _react2.default.createElement(
          'div',
          { style: containerStyle },
          _react2.default.createElement(
            'span',
            { style: tagStyle },
            '<',
            name
          ),
          _react2.default.createElement(_Props2.default, { node: node, singleLine: true }),
          _react2.default.createElement(
            'span',
            { style: tagStyle },
            '/>'
          )
        );
      }

      // Keep a copy so that further mutations to containerStyle don't impact us:
      var containerStyleCopy = Object.assign({}, containerStyle);

      // tag with children
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: containerStyleCopy },
          _react2.default.createElement(
            'span',
            { style: tagStyle },
            '<',
            name
          ),
          _react2.default.createElement(_Props2.default, { node: node }),
          _react2.default.createElement(
            'span',
            { style: tagStyle },
            '>'
          )
        ),
        _react2.default.Children.map(children, function (childElement) {
          return _react2.default.createElement(Node, { node: childElement, depth: depth + 1 });
        }),
        _react2.default.createElement(
          'div',
          { style: containerStyleCopy },
          _react2.default.createElement(
            'span',
            { style: tagStyle },
            '</',
            name,
            '>'
          )
        )
      );
    }
  }]);

  return Node;
}(_react2.default.Component);

Node.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};
exports.default = Node;


function getData(element) {
  var data = {
    name: null,
    text: null,
    children: null
  };

  if (typeof element == 'string') {
    data.text = element;
    return data;
  }

  if (typeof element === 'number') {
    data.text = String.toString(element);
    return data;
  }

  data.children = element.props.children;
  var type = element.type;

  if (typeof type === 'string') {
    data.name = type;
  } else {
    data.name = type.displayName || type.name || 'Unknown';
  }

  return data;
}