import { useState } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function Layout({ children }) {
  const [currentPage, setCurrentPage] = useState("home");

  function changeCurrentPage(page) {
    setCurrentPage(page);
  }
  return (
    <div className="relative flex flex-col justify-between h-full min-h-screen ">
      <Navbar page={currentPage} changePage={changeCurrentPage} />
      <div className="flex flex-col h-full grow ">{children}</div>
      <Footer />
      <div className="absolute w-full h-full bg-black -z-10 opacity-80"></div>
      <img
        className="absolute object-cover w-full h-full -z-20"
        src="/bg.jpg"
      />
    </div>
  );
}

export default Layout;
