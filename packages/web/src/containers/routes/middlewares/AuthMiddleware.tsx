import React from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    me {
      _id
      nickname
      username
    }
  }
`;

interface IAuthMiddleware {
  children: React.ReactChild;
  redirect: string;
}

const AuthMiddleware: React.FC = (props) => {
  const history = useHistory();
  const { error, loading } = useQuery(IS_LOGGED_IN);
  const TOKEN = localStorage.getItem('token');

  if (loading) return <p>Loading...</p>;

  if (error || !TOKEN) {
    history.push('/login', { redirect: props.redirect });
    return null;
  }

  return props.children;
};

export default AuthMiddleware;
