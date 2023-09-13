import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>There was an error: {error.message}</h1>
      <pre>{error.status} - {error.statusText}</pre>
    </div>
  )
}

export default Error