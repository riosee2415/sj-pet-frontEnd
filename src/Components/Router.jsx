import React from "react";
import withSplitting from "../Lib/withSplitting";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withResizeDetector } from "react-resize-detector";

const ScrollToTop = withSplitting(() => import("./ScrollToTop"));
const MM00 = withSplitting(() => import("../Routes/Client/MM00"));

const Header = withSplitting(() => import("../Routes/Layouts/Header"));
const Footer = withSplitting(() => import("../Routes/Layouts/Footer"));

const FixedNav = withSplitting(() => import("../Components/FixedNav"));
const ScrollTopBtn = withSplitting(() => import("../Components/ScrollTopBtn"));

const A_Header = withSplitting(() => import("../Routes/Layouts/A_Header"));
const A_Content = withSplitting(() => import("../Routes/Layouts/A_Content"));

const AppRouter = ({ width }) => {
  return (
    <Router>
      {/* <ScrollToTop> */}
      {/* HEADER */}
      <Route exact path="/" component={Header} />
      <Route exact path="/brand" component={Header} />
      <Route exact path="/operation" component={Header} />
      <Route exact path="/founded/:key" component={Header} />
      <Route exact path="/guide" component={Header} />
      <Route exact path="/menu/:key" component={Header} />
      <Route exact path="/store/:key" component={Header} />

      {/* FixedNav  */}
      <Route exact path="/" component={FixedNav} />
      <Route exact path="/brand" component={FixedNav} />
      <Route exact path="/operation" component={FixedNav} />
      <Route exact path="/founded/:key" component={FixedNav} />
      <Route exact path="/guide" component={FixedNav} />
      <Route exact path="/menu/:key" component={FixedNav} />
      <Route exact path="/store/:key" component={FixedNav} />

      {/* ScrollTopBtn */}
      <Route exact path="/" component={ScrollTopBtn} />
      <Route exact path="/brand" component={ScrollTopBtn} />
      <Route exact path="/operation" component={ScrollTopBtn} />
      <Route exact path="/founded/:key" component={ScrollTopBtn} />
      <Route exact path="/guide" component={ScrollTopBtn} />
      <Route exact path="/menu/:key" component={ScrollTopBtn} />
      <Route exact path="/store/:key" component={ScrollTopBtn} />

      <Route path="/admin" component={A_Header} />

      {/* CONTENT */}
      <Route exact path="/" component={MM00} />

      <Route path="/admin" component={A_Content} />

      {/* FOOTER */}
      <Route exact path="/" component={Footer} />
      <Route exact path="/brand" component={Footer} />
      <Route exact path="/operation" component={Footer} />
      <Route exact path="/founded/:key" component={Footer} />
      <Route exact path="/guide" component={Footer} />
      <Route exact path="/menu/:key" component={Footer} />
      <Route exact path="/store/:key" component={Footer} />
      {/* </ScrollToTop> */}
    </Router>
  );
};

export default withResizeDetector(AppRouter);
