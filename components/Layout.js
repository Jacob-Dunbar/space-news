import React from "react";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function Layout({ children }) {
  return (
    <div className=" bg-slate-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
