import React from 'react';
import PropVal from './PropVal';


export default class Props extends React.Component {

  static contextTypes = {
    storyStylesheet: React.PropTypes.object
  };

  render() {
    const props = this.props.node.props;
    const {storyStylesheet} = this.context;
    const defaultProps = this.props.node.type.defaultProps;
    if (!props || typeof props !== 'object') {
      return <span />;
    }

    const {propStyle, propValueStyle, propNameStyle} = storyStylesheet.Props;

    const names = Object.keys(props).filter(name => {
      return name[0] !== '_' && name !== 'children' && (!defaultProps || props[name] != defaultProps[name]);
    });

    const breakIntoNewLines = names.length > 3;
    const endingSpace = this.props.singleLine ? ' ' : '';

    const items = [];
    names.forEach((name, i) => {
      items.push(
        <span key={name}>
          {breakIntoNewLines ? (
            <span>
              <br />&nbsp;&nbsp;
            </span>
          ) : ' '}
          <span style={propNameStyle}>{name}</span>
          {/* Use implicit true: */}
          {(!props[name] || typeof props[name] !== 'boolean') && (
            <span>
              =
              <span style={propValueStyle}><PropVal val={props[name]} /></span>
            </span>
          )}

          {i === (names.length - 1) && (
            breakIntoNewLines ? <br /> : endingSpace
          )}
        </span>
      );
    });

    return <span>{items}</span>;
  }
}
