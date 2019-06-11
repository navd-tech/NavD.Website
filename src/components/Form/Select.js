import React from 'react';

const Select = props => {
  let formControl = 'form-control';
  let validationError = null;

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
    validationError = (
      <div className="text-danger">
        <p>Please, select an option.</p>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={props.id}>
        {props.placeholder}
        <select
          name={props.name}
          className={formControl}
          value={props.value}
          onChange={props.onChange}
        >
          {props.options.map(option => {
            if (option.disabled) {
              return (
                <option
                  key={option.value}
                  value={option.value}
                  disabled
                  selected
                >
                  {option.displayValue}
                </option>
              );
            }
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      </label>
      {validationError}
    </div>
  );
};

export default Select;
