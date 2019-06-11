import React from 'react';

const FailureMessage = props => {
  const failureFormDisplay = props.failureSubmitted ? 'block' : 'none';

  return (
    <div style={{ display: failureFormDisplay }}>
      <h1 style={{ textAlign: 'center' }}>Failed!</h1>
      <p style={{ textAlign: 'center' }}>
        It was not possible to submit the form. We are working fixing that.
      </p>
    </div>
  );
};
export default FailureMessage;
