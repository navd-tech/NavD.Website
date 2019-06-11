import React from 'react';

const Password = props => {
  let formControl = 'form-control';

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
  }

  return (
    <div className="form-group">
      <label htmlFor={props.id}>
        {props.placeholder}
        <input type="password" className={formControl} {...props} />
      </label>
    </div>
  );
};

export default Password;
