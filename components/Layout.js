import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ParticleBackground from "./particleBackground.js";

function Layout({ children }) {
  return (
    <div className="relative flex flex-col justify-between h-full min-h-screen ">
      <Navbar className="z-50 " />
      <div className="flex-grow h-[92vh]">{children}</div>
      <Footer />
      <ParticleBackground className="-z-10 " />
    </div>
  );
}

export default Layout;
