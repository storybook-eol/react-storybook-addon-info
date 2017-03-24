import React from 'react';
import createFragment from 'react-addons-create-fragment';

function previewArray(val, stylesheet) {
  const items = {};
  val.slice(0, 3).forEach((item, i) => {
    items[`n${i}`] = <PropVal val={item} />;
    items[`c${i}`] = ', ';
  });
  if (val.length > 3) {
    items.last = '…';
  } else {
    delete items[`c${val.length - 1}`];
  }
  return (
    <span style={stylesheet.array}>
      [{createFragment(items)}]
    </span>
  );
}

function previewObject(val, stylesheet) {
  const names = Object.keys(val);
  const items = {};
  names.slice(0, 3).forEach((name, i) => {
    items[`k${i}`] = <span style={stylesheet.attr}>{name}</span>;
    items[`c${i}`] = ': ';
    items[`v${i}`] = <PropVal val={val[name]} />;
    items[`m${i}`] = ', ';
  });
  if (names.length > 3) {
    items.rest = '…';
  } else {
    delete items[`m${names.length - 1}`];
  }
  return (
    <span style={stylesheet.object}>
      {'{'}{createFragment(items)}{'}'}
    </span>
  );
}

function previewProp(val, stylesheet) {
  let braceWrap = true;
  let content = null;
  if (typeof val === 'number') {
    content = <span style={stylesheet.number}>{val}</span>;
  } else if (typeof val === 'string') {
    if (val.length > 50) {
      val = val.slice(0, 50) + '…';
    }
    content = <span style={stylesheet.string}>"{val}"</span>;
    braceWrap = false;
  } else if (typeof val === 'boolean') {
    content = <span style={stylesheet.bool}>{`${val}`}</span>;
  } else if (Array.isArray(val)) {
    content = previewArray(val, stylesheet);
  } else if (typeof val === 'function') {
    content = <span style={stylesheet.func}>{val.name ? `${val.name}()` : 'anonymous()'}</span>;
  } else if (!val) {
    content = <span style={stylesheet.empty}>{`${val}`}</span>;
  } else if (typeof val !== 'object') {
    content = <span>…</span>;
  } else if (React.isValidElement(val)) {
    content = (
      <span style={stylesheet.object}>
        {`<${val.type.displayName || val.type.name || val.type} />`}
      </span>
    );
  } else {
    content = previewObject(val, stylesheet);
  }

  if (!braceWrap) return content;
  return <span>&#123;{content}&#125;</span>;
}

export default class PropVal extends React.Component {

  static contextTypes = {
    storyStylesheet: React.PropTypes.object
  };

  render() {
    return previewProp(this.props.val, this.context.storyStylesheet.PropVal);
  }
}

module.exports = PropVal;
