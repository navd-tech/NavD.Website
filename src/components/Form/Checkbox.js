import React from 'react';

const Checkbox = props => {
  let formControl = 'form-control';
  let validationError = null;

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
    validationError = (
      <div className="text-danger">
        <p>
          You must agree with the Terms & Conditions, to complete the
          registration.
        </p>
      </div>
    );
  }

  return (
    <div className="form-group">
      {props.options.map(option => (
        <div className="checkbox" key={option.value}>
          <label htmlFor={props.id}>
            <input
              type="checkbox"
              name={props.name}
              value={option.value}
              onChange={props.onChange}
            />
            {option.displayValue}
          </label>
          <br />
          {validationError}
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
