import React from 'react';

const SuccessMessage = props => {
  const successFormDisplay = props.successSubmited ? 'block' : 'none';

  return (
    <div style={{ display: successFormDisplay }}>
      <h1 style={{ textAlign: 'center' }}>Success!</h1>
      <p style={{ textAlign: 'center' }}>
        You have successfully submitted. An email has been sent to you.
      </p>
    </div>
  );
};
export default SuccessMessage;
