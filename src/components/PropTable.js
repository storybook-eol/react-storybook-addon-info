import React from 'react';
import PropVal from './PropVal';

const stylesheet = {
  propTable: {
    marginLeft: -10,
    borderSpacing: '10px 5px',
    borderCollapse: 'separate',
  },
};

function isNotEmpty(obj) {
  return obj && Object.keys(obj).length > 0;
}

const PropTypesMap = new Map();
for (const typeName in React.PropTypes) {
  if (!React.PropTypes.hasOwnProperty(typeName)) {
    continue;
  }
  const type = React.PropTypes[typeName];
  PropTypesMap.set(type, typeName);
  PropTypesMap.set(type.isRequired, typeName);
}

function renderDocgenPropType(propType) {
  if (!propType) {
    return 'unknown';
  }

  const name = propType.name;

  switch (name) {
    case 'arrayOf':
      return `${propType.value.name}[]`;
    case 'instanceOf':
      return propType.value;
    case 'union':
      return propType.raw;
    default:
      return name;
  }
}

function hasDocgen(type) {
  return isNotEmpty(type.__docgenInfo);
}

function propsFromDocgen(type) {
  let props = null;

  const docgenInfo = type.__docgenInfo || {};
  const docgenInfoProps = docgenInfo.props;

  if (docgenInfoProps) {
    props = {};
    for (const propName in docgenInfoProps) {
      if (!docgenInfoProps.hasOwnProperty(propName)) {
        continue;
      }
      const docgenInfoProp = docgenInfoProps[propName];
      const defaultValueDesc = docgenInfoProp.defaultValue || {};
      const propType = docgenInfoProp.flowType || docgenInfoProp.type || 'other';

      props[propName] = {
        property: propName,
        propType: renderDocgenPropType(propType),
        required: docgenInfoProp.required,
        description: docgenInfoProp.description,
        defaultValue: defaultValueDesc.value,
      };
    }
  }
  return props;
}

function propsFromPropTypes(type) {
  let props = null;

  if (type.propTypes) {
    props = {};
    for (const property in type.propTypes) {
      if (!type.propTypes.hasOwnProperty(property)) {
        continue;
      }
      const typeInfo = type.propTypes[property];
      const propType = PropTypesMap.get(typeInfo) || 'other';
      const required = typeInfo.isRequired === undefined ? 'yes' : 'no';
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
  return props;
}

export default class PropTable extends React.Component {
  render() {
    const type = this.props.type;

    if (!type) {
      return null;
    }

    const props = hasDocgen(type) ? propsFromDocgen(type) : propsFromPropTypes(type);

    if (isNotEmpty(props)) {
      return (
        <table style={stylesheet.propTable}>
          <thead>
            <tr>
              <th>property</th>
              <th>propType</th>
              <th>required</th>
              <th>default</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(props).sort((a, b) => a.property > b.property).map(row => (
              <tr key={row.property}>
                <td>{row.property}</td>
                <td>{row.propType}</td>
                <td>{row.required}</td>
                <td>{row.defaultValue === undefined ? '-' : <PropVal val={row.defaultValue} />}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return <small>No propTypes defined!</small>;
    }
  }
}

PropTable.displayName = 'PropTable';
PropTable.propTypes = {
  type: React.PropTypes.func,
};
