import React from "react";
import withSplitting from "../Lib/withSplitting";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withResizeDetector } from "react-resize-detector";

const ScrollToTop = withSplitting(() => import("./ScrollToTop"));
const MM00 = withSplitting(() => import("../Routes/Client/MM00"));
const MM01 = withSplitting(() => import("../Routes/Client/MM01"));
const MM02 = withSplitting(() => import("../Routes/Client/MM02"));
const MM03 = withSplitting(() => import("../Routes/Client/MM03"));
const MM04 = withSplitting(() => import("../Routes/Client/MM04"));
const MM05 = withSplitting(() => import("../Routes/Client/MM05"));

const Header = withSplitting(() => import("../Routes/Layouts/Header"));
const Footer = withSplitting(() => import("../Routes/Layouts/Footer"));

const Notice_D = withSplitting(() => import("../Components/notice/Board_D"));
const Notice_W = withSplitting(() => import("../Components/notice/Board_W"));

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
      <Route exact path="/about" component={Header} />
      <Route exact path="/interior" component={Header} />
      <Route exact path="/info" component={Header} />
      <Route exact path="/franchisee" component={Header} />
      <Route exact path="/contact" component={Header} />
      <Route exact path="/contact/:key" component={Header} />
      <Route exact path="/contact-write" component={Header} />

      {/* FixedNav  */}
      <Route exact path="/" component={FixedNav} />
      <Route exact path="/about" component={FixedNav} />
      <Route exact path="/interior" component={FixedNav} />
      <Route exact path="/info" component={FixedNav} />
      <Route exact path="/franchisee" component={FixedNav} />
      <Route exact path="/contact" component={FixedNav} />
      <Route exact path="/contact/:key" component={FixedNav} />
      <Route exact path="/contact-write" component={FixedNav} />

      {/* ScrollTopBtn */}
      <Route exact path="/" component={ScrollTopBtn} />
      <Route exact path="/about" component={ScrollTopBtn} />
      <Route exact path="/interior" component={ScrollTopBtn} />
      <Route exact path="/info" component={ScrollTopBtn} />
      <Route exact path="/franchisee" component={ScrollTopBtn} />
      <Route exact path="/contact" component={ScrollTopBtn} />
      <Route exact path="/contact/:key" component={ScrollTopBtn} />
      <Route exact path="/contact-write" component={ScrollTopBtn} />

      <Route path="/admin" component={A_Header} />

      {/* CONTENT */}
      <Route exact path="/" component={MM00} />
      <Route exact path="/about" component={MM01} />
      <Route exact path="/interior" component={MM02} />
      <Route exact path="/info" component={MM03} />
      <Route exact path="/franchisee" component={MM04} />
      <Route exact path="/contact" component={MM05} />
      <Route exact path="/contact/:key" component={Notice_D} />
      <Route exact path="/contact-write" component={Notice_W} />

      <Route path="/admin" component={A_Content} />

      {/* FOOTER */}
      <Route exact path="/" component={Footer} />
      <Route exact path="/about" component={Footer} />
      <Route exact path="/interior" component={Footer} />
      <Route exact path="/info" component={Footer} />
      <Route exact path="/franchisee" component={Footer} />
      <Route exact path="/contact" component={Footer} />
      <Route exact path="/contact/:key" component={Footer} />
      <Route exact path="/contact-write" component={Footer} />
      {/* </ScrollToTop> */}
    </Router>
  );
};

export default withResizeDetector(AppRouter);
