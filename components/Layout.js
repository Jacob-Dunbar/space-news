import React from "react";
import css from "../css/Layout.module.css";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function Layout({ children }) {
  return (
    <div className={css.content}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
