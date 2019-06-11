import React from 'react';

const TextArea = props => {
  let formControl = 'form-control';
  let validationError = null;

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
    validationError = (
      <div className="text-danger">
        <p>Please enter a valid message.</p>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={props.id}>
        {props.placeholder}
        <textarea {...props} className={formControl} />
      </label>
      {validationError}
    </div>
  );
};

export default TextArea;
