'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropVal = require('./PropVal');

var _PropVal2 = _interopRequireDefault(_PropVal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypesMap = new Map();
for (var typeName in _react2.default.PropTypes) {
  if (!_react2.default.PropTypes.hasOwnProperty(typeName)) {
    continue;
  }
  var type = _react2.default.PropTypes[typeName];
  PropTypesMap.set(type, typeName);
  PropTypesMap.set(type.isRequired, typeName);
}

var PropTable = function (_React$Component) {
  _inherits(PropTable, _React$Component);

  function PropTable() {
    _classCallCheck(this, PropTable);

    return _possibleConstructorReturn(this, (PropTable.__proto__ || Object.getPrototypeOf(PropTable)).apply(this, arguments));
  }

  _createClass(PropTable, [{
    key: 'render',
    value: function render() {
      var type = this.props.type;
      var stylesheet = this.context.storyStylesheet.PropTable;

      if (!type) {
        return null;
      }

      var props = {};

      if (type.propTypes) {
        for (var property in type.propTypes) {
          if (!type.propTypes.hasOwnProperty(property)) {
            continue;
          }
          var typeInfo = type.propTypes[property];
          var propType = PropTypesMap.get(typeInfo) || 'other';
          var required = typeInfo.isRequired === undefined ? 'yes' : 'no';
          props[property] = { property: property, propType: propType, required: required };
        }
      }

      if (type.defaultProps) {
        for (var _property in type.defaultProps) {
          if (!type.defaultProps.hasOwnProperty(_property)) {
            continue;
          }
          var value = type.defaultProps[_property];
          if (value === undefined) {
            continue;
          }
          if (!props[_property]) {
            props[_property] = { property: _property };
          }
          props[_property].defaultValue = value;
        }
      }

      var array = Object.values(props);
      if (!array.length) {
        return _react2.default.createElement(
          'small',
          null,
          'No propTypes defined!'
        );
      }
      array.sort(function (a, b) {
        return a.property > b.property;
      });

      return _react2.default.createElement(
        'table',
        { style: stylesheet.table },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'property'
            ),
            _react2.default.createElement(
              'th',
              null,
              'propType'
            ),
            _react2.default.createElement(
              'th',
              null,
              'required'
            ),
            _react2.default.createElement(
              'th',
              null,
              'default'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          array.map(function (row) {
            return _react2.default.createElement(
              'tr',
              { key: row.property },
              _react2.default.createElement(
                'td',
                null,
                row.property
              ),
              _react2.default.createElement(
                'td',
                null,
                row.propType
              ),
              _react2.default.createElement(
                'td',
                null,
                row.required
              ),
              _react2.default.createElement(
                'td',
                null,
                row.defaultValue === undefined ? '-' : _react2.default.createElement(_PropVal2.default, { val: row.defaultValue })
              )
            );
          })
        )
      );
    }
  }]);

  return PropTable;
}(_react2.default.Component);

PropTable.contextTypes = {
  storyStylesheet: _react2.default.PropTypes.object
};
exports.default = PropTable;


PropTable.displayName = 'PropTable';
PropTable.propTypes = {
  type: _react2.default.PropTypes.func
};