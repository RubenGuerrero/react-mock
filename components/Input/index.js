import React from 'react';
import classnames from 'classnames';

import style from './style.scss';

class Input extends React.Component {

  static propTypes = {
    type: React.PropTypes.string,
    label: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.any,
    disabled: React.PropTypes.bool,
    error: React.PropTypes.string
  };

  static defaultProps = {
    className: '',
    disabled: false,
    type: 'text'
  };

  handleChange = (event) => {
    if (this.props.onChange) this.props.onChange(event.target.value, event);
  };

  render(){

    const {
      type,
      label,
      value,
      disabled,
      error,
      ...others
    } = this.props;

    const isFilled = value !== null && value !== undefined && value !== '' && !Number.isNaN(value);

    const className = {
      container: classnames(style.container, {
        [style.disabled]: disabled
      }),
      field: classnames(style.field, {
        [style.filled]: isFilled,
        [style.error]: error
      }),
      label: classnames(style.label, {
        [style.error]: error
      })
    };

    const InputElement = React.createElement('input', {
      ...others,
      className: className.field,
      onChange: this.handleChange,
      ref: 'input',
      role: 'input',
      disabled,
      value,
      type
    });


    return (
      <div className={className.container}>
        {InputElement}
        <label className={className.label}>{label}</label>
      </div>
    )
  }

}

export default Input;
