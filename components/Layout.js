import React from "react";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-black">
      <Navbar />
      <div className="flex flex-col grow ">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
