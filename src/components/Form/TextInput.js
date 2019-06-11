import React from 'react';

const TextInput = props => {
  let formControl = 'form-control';
  let validationError = null;

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
    validationError = (
      <div className="text-danger">
        <p>Please enter a valid value!</p>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={props.id}>
        {props.placeholder}
        <input type="text" className={formControl} {...props} />
      </label>
      {validationError}
    </div>
  );
};

export default TextInput;
