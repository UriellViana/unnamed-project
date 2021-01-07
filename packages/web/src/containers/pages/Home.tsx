import React from "react";
import { RouteProps } from "react-router-dom";
import { TradulabHeader } from "../../components/layout";

const Home: React.FC<RouteProps> = () => {
  return (
    <TradulabHeader>
      <p>Home</p>
    </TradulabHeader>
  );
};

export default Home;
