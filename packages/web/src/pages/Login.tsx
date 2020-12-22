import React from "react";
import { gql, useQuery } from "@apollo/client";
<<<<<<< HEAD
import { Redirect } from "react-router-dom";
import { LoginContainer } from "../containers";
// import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
// Tipagem da Função
const Login: React.FC = () => {
  return (
    <Grid className="Page">
      <LoginContainer />
    </Grid>
  );
  // const LOGIN = gql`
  //   query userBolivar($email: String!, $password: String!) {
  //     login(payload: { email: $email, password: $password }) {
  //       token
  //       nickname
  //       username
  //       email
  //       id
  //     }
  //   }
  // `;

  // // Quando for trocar o usuário para testar o OtherMiddleware lembre-se de apagar o token no localStorage
  // const BOLIVAR = { email: "bolivar@dito.com.br", password: "123456" };

  // const MIGUEL = { email: "miguel@dito.com.br", password: "123456" };

  // const { data, error, loading } = useQuery(LOGIN, {
  //   variables: BOLIVAR,
  // });

  // if (loading) return <p>Loading...</p>;

  // if (error)
  //   return (
  //     <Redirect
  //       to={{ pathname: "/error", state: { message: error.message } }}
  //     />
  //   );

  // if (data && !error) localStorage.setItem("token", data.login.token);
  // console.log("Login Data:", data);
  // // Salvar os dados do usuário no estado

  // if (props.location.state.path)
  //   return <Redirect to={props.location.state.path} />;

  // return <Redirect to="/" />;
=======
import { Redirect, RouteProps } from "react-router-dom";

interface LoginProps extends RouteProps {
  location: {
    state: { path?: string };
    pathname: string;
    search: string;
    hash: string;
  };
}
// Tipagem da Função
const Login: React.FC<LoginProps> = ({ location }) => {
  const LOGIN = gql`
    query userBolivar($email: String!, $password: String!) {
      login(payload: { email: $email, password: $password }) {
        token
        nickname
        username
        email
        id
      }
    }
  `;

  // Quando for trocar o usuário para testar o OtherMiddleware lembre-se de apagar o token no localStorage
  const BOLIVAR = { email: "bolivar@dito.com.br", password: "123456" };

  const MIGUEL = { email: "miguel@dito.com.br", password: "123456" };

  const { data, error, loading } = useQuery(LOGIN, {
    variables: MIGUEL,
  });

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <Redirect
        to={{ pathname: "/error", state: { message: error.message } }}
      />
    );

  if (data && !error) localStorage.setItem("token", data.login.token);
  console.log("Login Data:", data);
  // Salvar os dados do usuário no estado

  if (location.state && location.state.path)
    return <Redirect to={location.state.path} />;

  return <Redirect to="/" />;
>>>>>>> Types
};

export default Login;
