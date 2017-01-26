import React from 'react';
import { baseFonts } from '../theme';

export const H1 = ({id, children}) => {
    const styles = {
      ...baseFonts,
      borderBottom: '1px solid #eee',
      fontWeight: 600,
      margin: 0,
      padding: 0,
      fontSize: '40px',
    };

    return <h1 id={id} style={styles}>{children}</h1>;
}

export const H2 = ({id, children}) => {
    const styles = {
      ...baseFonts,
      fontWeight: 600,
      margin: 0,
      padding: 0,
      fontSize: '30px',
    };

    return <h2 id={id} style={styles}>{children}</h2>;
}

export const H3 = ({id, children}) => {
    const styles = {
      ...baseFonts,
      fontWeight: 600,
      margin: 0,
      padding: 0,
      fontSize: '22px',
      textTransform: 'uppercase',
    };

    return <h3 id={id} style={styles}>{children}</h3>;
}

export const H4 = ({id, children}) => {
    const styles = {
      ...baseFonts,
      fontWeight: 600,
      margin: 0,
      padding: 0,
      fontSize: '20px',
    };

    return <h4 id={this.props.id} style={styles}>{this.props.children}</h4>;
}

export const H5 = ({id, children}) => {
    const styles = {
      ...baseFonts,
      fontWeight: 600,
      margin: 0,
      padding: 0,
      fontSize: '18px',
    };

    return <h5 id={id} style={styles}>{children}</h5>;
}

export const H6 = ({id, children}) => {
    const styles = {
      ...baseFonts,
      fontWeight: 400,
      margin: 0,
      padding: 0,
      fontSize: '18px',
    };

    return <h6 id={this.props.id} style={styles}>{this.props.children}</h6>;
}
