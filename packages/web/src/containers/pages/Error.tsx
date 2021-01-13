import React from 'react';
import { RouteProps } from 'react-router-dom';

interface IError extends RouteProps {
  location: {
    state: { message?: string };
    pathname: string;
    search: string;
    hash: string;
  };
}

const Error: React.FC<IError> = ({ location }) => {
  if (location && location.state) return <p> {location.state.message}</p>;
  return <p>Internal Error</p>;
};

export default Error;
