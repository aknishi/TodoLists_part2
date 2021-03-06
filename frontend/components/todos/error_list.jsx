import React from 'react';

const ErrorList = ({ errors }) => {
  debugger
  if (errors.length === 0) return null;
  const errorItems = errors.map(error => <li key={ error }>{ error }</li>)

  return (
    <ul>
      { errorItems }
    </ul>
  )
}

export default ErrorList;
