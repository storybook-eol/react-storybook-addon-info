import React from 'react';
import PropVal from './PropVal';

let ReactPropTypeArgs;
const PropTypesMap = new Map();
for (const typeName in React.PropTypes) {
  if (!React.PropTypes.hasOwnProperty(typeName)) {
    continue;
  }
  const type = React.PropTypes[typeName];
  PropTypesMap.set(type, typeName);
  PropTypesMap.set(type.isRequired, typeName);
}

const SpecialPropTypes = [
  { regex: /, expected an array/m,              name: match => 'arrayOf'},
  { regex: /, expected `object`/m,              name: match => 'shape'},
  { regex: /, expected one of (\[.+])/m,        name: match => 'oneOf(' + match[1] + ')'},
  { regex: /, expected instance of `([^`]+)`/m, name: match => 'instanceOf(' + match[1] + ')'},
  { regex: /, expected an object/m,             name: match => 'objectOf'},
];

const stylesheet = {
  propTable: {
    marginLeft: -10,
    borderSpacing: '10px 5px',
    borderCollapse: 'separate',
  },
};

export default class PropTable extends React.Component {
  render() {
    const type = this.props.type;

    if (!type) {
      return null;
    }

    const props = {};

    if (type.propTypes) {
      for (const property in type.propTypes) {
        if (!type.propTypes.hasOwnProperty(property)) {
          continue;
        }
        const typeInfo = type.propTypes[property];
        let propType = PropTypesMap.get(typeInfo);
        if (!propType) {
          const outcome = typeInfo(...ReactPropTypeArgs);
          let match;
          SpecialPropTypes.find(spt => {
            if (match = outcome.message.match(spt.regex)) {
              propType = spt.name(match);
              return true;
            }
          });
        }
        const required = typeInfo.isRequired === undefined;
        props[property] = { property, propType, required };
      }
    }

    if (type.defaultProps) {
      for (const property in type.defaultProps) {
        if (!type.defaultProps.hasOwnProperty(property)) {
          continue;
        }
        const value = type.defaultProps[property];
        if (value === undefined) {
          continue;
        }
        if (!props[property]) {
          props[property] = { property };
        }
        props[property].defaultValue = value;
      }
    }

    const array = Object.values(props);
    if (!array.length) {
      return <small>No propTypes defined!</small>;
    }
    array.sort(function (a, b) {
      return a.property > b.property;
    });

    return (
      <table style={stylesheet.propTable}>
        <thead>
          <tr>
            <th>property</th>
            <th>propType</th>
            <th>required</th>
            <th>default</th>
          </tr>
        </thead>
        <tbody>
          {array.map(row => (
            <tr key={row.property}>
              <td>{row.property}</td>
              <td>{row.propType || 'other'}</td>
              <td>{row.required ? 'yes' : 'no'}</td>
              <td>{row.defaultValue === undefined ? '-' : <PropVal val={row.defaultValue} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

PropTable.displayName = 'PropTable';
PropTable.propTypes = {
  type: (...args) =>
  {
    //This is a trick to get valid arguments to pass to React's PropTypes functions
    ReactPropTypeArgs = args;
    return React.PropTypes.func(...args)
  }
};
