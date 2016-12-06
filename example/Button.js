import React from 'react';

const Button = ({ disabled, label, style, onClick }) => (
  <button disabled={disabled} onClick={onClick}>
    {label}
  </button>
);

Object.assign(Button, {
  displayName: 'Button',
  propTypes: {
    /** Single line comment: This is label description */
    label: React.PropTypes.string.isRequired,
    /*
     * Multiple lines comment: This is style description
     * Must be in object
     */
    style: React.PropTypes.object,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
  },
});

export default Button;
