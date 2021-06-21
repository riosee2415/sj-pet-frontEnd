import "@babel/polyfill";
import "core-js/stable";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App.jsx";
import { ApolloProvider } from "@apollo/client";
import Client from "./Apollo/Client";
import "antd/dist/antd.css";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
