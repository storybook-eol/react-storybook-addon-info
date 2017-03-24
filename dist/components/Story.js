'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _merge2 = require('lodash/merge');

var _merge3 = _interopRequireDefault(_merge2);

var _markdownToReactComponents = require('markdown-to-react-components');

var _markdownToReactComponents2 = _interopRequireDefault(_markdownToReactComponents);

var _PropTable = require('./PropTable');

var _PropTable2 = _interopRequireDefault(_PropTable);

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _theme = require('./theme');

var _markdown = require('./markdown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Story = function (_React$Component) {
  _inherits(Story, _React$Component);

  function Story(props) {
    var _ref;

    _classCallCheck(this, Story);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Story.__proto__ || Object.getPrototypeOf(Story)).call.apply(_ref, [this, props].concat(args)));

    _this.state = {
      open: false,
      stylesheet: (0, _merge3.default)({}, _theme.baseStylesheet, props.stylesheet)
    };
    _markdownToReactComponents2.default.configure(_this.props.mtrcConf);
    return _this;
  }

  // pass down the stylesheet on context


  _createClass(Story, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        storyStylesheet: this.state.stylesheet
      };
    }
  }, {
    key: 'getInfoBodyStyles',
    value: function getInfoBodyStyles() {
      var stylesheet = this.state.stylesheet;

      return (0, _merge3.default)({}, stylesheet.baseFont, stylesheet.infoBody);
    }
  }, {
    key: '_renderStory',
    value: function _renderStory() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }, {
    key: '_renderInline',
    value: function _renderInline() {
      var stylesheet = this.state.stylesheet;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: stylesheet.infoPage },
          _react2.default.createElement(
            'div',
            { style: this.getInfoBodyStyles() },
            this._getInfoHeader()
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          this._renderStory()
        ),
        _react2.default.createElement(
          'div',
          { style: stylesheet.infoPage },
          _react2.default.createElement(
            'div',
            { style: this.getInfoBodyStyles() },
            this._getInfoContent(),
            this._getSourceCode(),
            this._getPropTables()
          )
        )
      );
    }
  }, {
    key: '_renderOverlay',
    value: function _renderOverlay() {
      var _this2 = this;

      var stylesheet = this.state.stylesheet;

      var linkStyle = _extends({}, stylesheet.link.base, stylesheet.link.topRight);

      var infoStyle = Object.assign({}, stylesheet.info);
      if (!this.state.open) {
        infoStyle.display = 'none';
      }

      var openOverlay = function openOverlay() {
        _this2.setState({ open: true });
        return false;
      };

      var closeOverlay = function closeOverlay() {
        _this2.setState({ open: false });
        return false;
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: stylesheet.children },
          this.props.children
        ),
        _react2.default.createElement(
          'a',
          { style: linkStyle, onClick: openOverlay },
          '?'
        ),
        _react2.default.createElement(
          'div',
          { style: infoStyle },
          _react2.default.createElement(
            'a',
            { style: linkStyle, onClick: closeOverlay },
            '\xD7'
          ),
          _react2.default.createElement(
            'div',
            { style: stylesheet.infoPage },
            _react2.default.createElement(
              'div',
              { style: this.getInfoBodyStyles() },
              this._getInfoHeader(),
              this._getInfoContent(),
              this._getSourceCode(),
              this._getPropTables()
            )
          )
        )
      );
    }
  }, {
    key: '_getInfoHeader',
    value: function _getInfoHeader() {
      var stylesheet = this.state.stylesheet;

      if (!this.props.context || !this.props.showHeader) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { style: stylesheet.header.body },
        _react2.default.createElement(
          'h1',
          { style: stylesheet.header.h1 },
          this.props.context.kind
        ),
        _react2.default.createElement(
          'h2',
          { style: stylesheet.header.h2 },
          this.props.context.story
        )
      );
    }
  }, {
    key: '_getInfoContent',
    value: function _getInfoContent() {
      var stylesheet = this.state.stylesheet;

      if (!this.props.info) {
        return '';
      }
      var lines = this.props.info.split('\n');
      while (lines[0].trim() === '') {
        lines.shift();
      }
      var padding = 0;
      var matches = lines[0].match(/^ */);
      if (matches) {
        padding = matches[0].length;
      }
      var source = lines.map(function (s) {
        return s.slice(padding);
      }).join('\n');
      return _react2.default.createElement(
        'div',
        { style: stylesheet.infoContent },
        (0, _markdownToReactComponents2.default)(source).tree
      );
    }
  }, {
    key: '_getSourceCode',
    value: function _getSourceCode() {
      var stylesheet = this.state.stylesheet;

      if (!this.props.showSource) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { style: stylesheet.source.h1 },
          'Story Source'
        ),
        _react2.default.createElement(
          _markdown.Pre,
          null,
          _react2.default.Children.map(this.props.children, function (root, idx) {
            return _react2.default.createElement(_Node2.default, { key: idx, depth: 0, node: root });
          })
        )
      );
    }
  }, {
    key: '_getPropTables',
    value: function _getPropTables() {
      var types = new Map();

      if (this.props.propTables === null) {
        return null;
      }

      if (!this.props.children) {
        return null;
      }

      if (this.props.propTables) {
        this.props.propTables.forEach(function (type) {
          types.set(type, true);
        });
      }

      // depth-first traverse and collect types
      function extract(children) {
        if (!children) {
          return;
        }
        if (Array.isArray(children)) {
          children.forEach(extract);
          return;
        }
        if (children.props && children.props.children) {
          extract(children.props.children);
        }
        if (typeof children === 'string' || typeof children.type === 'string') {
          return;
        }
        if (children.type && !types.has(children.type)) {
          types.set(children.type, true);
        }
      }

      // extract components from children
      extract(this.props.children);

      var array = Array.from(types.keys());
      array.sort(function (a, b) {
        return (a.displayName || a.name) > (b.displayName || b.name);
      });

      var stylesheet = this.state.stylesheet;

      var propTables = array.map(function (type, idx) {
        return _react2.default.createElement(
          'div',
          { key: idx },
          _react2.default.createElement(
            'h2',
            { style: stylesheet.propTableHead },
            '"',
            type.displayName || type.name,
            '" Component'
          ),
          _react2.default.createElement(_PropTable2.default, { type: type })
        );
      });

      if (!propTables || propTables.length === 0) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { style: stylesheet.source.h1 },
          'Prop Types'
        ),
        propTables
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.showInline) {
        return this._renderInline();
      }

      return this._renderOverlay();
    }
  }]);

  return Story;
}(_react2.default.Component);

Story.childContextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};
exports.default = Story;


Story.displayName = 'Story';
Story.propTypes = {
  context: _react2.default.PropTypes.object,
  info: _react2.default.PropTypes.string,
  propTables: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.func),
  showInline: _react2.default.PropTypes.bool,
  showHeader: _react2.default.PropTypes.bool,
  showSource: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array]),
  stylesheet: _react2.default.PropTypes.object,
  mtrcConf: _react2.default.PropTypes.object
};

Story.defaultProps = {
  showInline: false,
  showHeader: true,
  showSource: true,
  mtrcConf: {}
};