import React from 'react';
import _merge from 'lodash/merge';
import MTRC from 'markdown-to-react-components';
import PropTable from './PropTable';
import Node from './Node';
import { baseStylesheet } from './theme';
import { Pre } from './markdown';


export default class Story extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      open: false,
      stylesheet: _merge({}, baseStylesheet, props.stylesheet)
    };
    MTRC.configure(this.props.mtrcConf);
  }

  // pass down the stylesheet on context
  static childContextTypes = {
    storyStylesheet: React.PropTypes.object
  };

  getChildContext() {
    return {
      storyStylesheet: this.state.stylesheet
    };
  }

  getInfoBodyStyles() {
    const {stylesheet} = this.state;
    return _merge({}, stylesheet.baseFont, stylesheet.infoBody);
  }

  _renderStory() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }

  _renderInline() {
    const {stylesheet} = this.state;
    return (
      <div>
        <div style={stylesheet.infoPage}>
          <div style={this.getInfoBodyStyles()} >
            { this._getInfoHeader() }
          </div>
        </div>
        <div>
            { this._renderStory() }
        </div>
        <div style={stylesheet.infoPage}>
          <div style={this.getInfoBodyStyles()} >
            { this._getInfoContent() }
            { this._getSourceCode() }
            { this._getPropTables() }
          </div>
        </div>
      </div>
    );
  }

  _renderOverlay() {
    const {stylesheet} = this.state;
    const linkStyle = {
      ...stylesheet.link.base,
      ...stylesheet.link.topRight,
    };

    const infoStyle = Object.assign({}, stylesheet.info);
    if (!this.state.open) {
      infoStyle.display = 'none';
    }

    const openOverlay = () => {
      this.setState({ open: true });
      return false;
    };

    const closeOverlay = () => {
      this.setState({ open: false });
      return false;
    };

    return (
      <div>
        <div style={stylesheet.children}>
          { this.props.children }
        </div>
        <a style={linkStyle} onClick={openOverlay}>?</a>
        <div style={infoStyle}>
          <a style={linkStyle} onClick={closeOverlay}>×</a>
          <div style={stylesheet.infoPage}>
            <div style={this.getInfoBodyStyles()}>
              { this._getInfoHeader() }
              { this._getInfoContent() }
              { this._getSourceCode() }
              { this._getPropTables() }
            </div>
          </div>
        </div>
      </div>
    );
  }

  _getInfoHeader() {
    const {stylesheet} = this.state;
    if (!this.props.context || !this.props.showHeader) {
      return null;
    }

    return (
      <div style={stylesheet.header.body}>
        <h1 style={stylesheet.header.h1}>{this.props.context.kind}</h1>
        <h2 style={stylesheet.header.h2}>{this.props.context.story}</h2>
      </div>
    );
  }

  _getInfoContent() {
    const {stylesheet} = this.state;
    if (!this.props.info) {
      return '';
    }
    const lines = this.props.info.split('\n');
    while (lines[0].trim() === '') {
      lines.shift();
    }
    let padding = 0;
    const matches = lines[0].match(/^ */);
    if (matches) {
      padding = matches[0].length;
    }
    const source = lines.map(s => s.slice(padding)).join('\n');
    return (
      <div style={stylesheet.infoContent}>
        {MTRC(source).tree}
      </div>
    );
  }

  _getSourceCode() {
    const {stylesheet} = this.state;
    if (!this.props.showSource) {
      return null;
    }

    return (
      <div>
        <h1 style={stylesheet.source.h1}>Story Source</h1>
        <Pre>
        {React.Children.map(this.props.children, (root, idx) => (
          <Node key={idx} depth={0} node={root} />
        ))}
        </Pre>
      </div>
    );
  }

  _getPropTables() {
    const types = new Map();

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

    const array = Array.from(types.keys());
    array.sort(function (a, b) {
      return (a.displayName || a.name) > (b.displayName || b.name);
    });

    const {stylesheet} = this.state;
    const propTables = array.map(function (type, idx) {
      return (
        <div key={idx}>
          <h2 style={stylesheet.propTableHead}>"{type.displayName || type.name}" Component</h2>
          <PropTable type={type} />
        </div>
      );
    });

    if (!propTables || propTables.length === 0) {
      return null;
    }

    return (
      <div>
        <h1 style={stylesheet.source.h1}>Prop Types</h1>
        {propTables}
      </div>
    );
  }

  render() {
    if (this.props.showInline) {
      return this._renderInline();
    }

    return this._renderOverlay();
  }
}

Story.displayName = 'Story';
Story.propTypes = {
  context: React.PropTypes.object,
  info: React.PropTypes.string,
  propTables: React.PropTypes.arrayOf(React.PropTypes.func),
  showInline: React.PropTypes.bool,
  showHeader: React.PropTypes.bool,
  showSource: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  stylesheet: React.PropTypes.object,
  mtrcConf: React.PropTypes.object
};

Story.defaultProps = {
  showInline: false,
  showHeader: true,
  showSource: true,
  mtrcConf: {}
};
