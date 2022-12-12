import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ParticleBackground from "./particleBackground.js";

function Layout({ children }) {
  return (
    <div className="relative flex flex-col justify-between h-full min-h-screen ">
      <Navbar className="z-50 " />
      <div className="flex flex-col h-full grow ">{children}</div>
      <Footer />
      <div className="absolute w-full h-full bg-black -z-10 opacity-80"></div>
      <ParticleBackground className="-z-10 " />
    </div>
  );
}

export default Layout;
