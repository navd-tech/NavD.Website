import React from 'react';

const Telephone = props => {
  let formControl = 'form-control';
  let validationError = null;

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
    validationError = (
      <div className="text-danger">
        <p>Please enter a valid telephone number!</p>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={props.id}>
        {props.placeholder}
        <input type="tel" className={formControl} {...props} />
      </label>
      {validationError}
    </div>
  );
};

export default Telephone;
