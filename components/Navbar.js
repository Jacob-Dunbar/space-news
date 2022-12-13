import Link from "next/link";
import { useRouter } from "next/router";

function Navbar(props) {
  // Get the current route to allow navbar to know what page we are on
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className=" w-full flex  z-50 justify-between h-[8vh] items-center w-100% sm:px-0 px-5">
      {/* Logo */}
      <div>
        <img
          className="w-40 pt-2 pl-3 sm:pl-5"
          src="/space-news-logo.svg"
          alt="space news logo"
        />
      </div>
      {/* Menu */}
      <div className="flex items-center font-sans sm:m-auto sm:left-0 sm:right-0 sm:fixed sm:justify-center sm:rounded-lg sm:h-12 sm:opacity-95 sm:items-center sm:backdrop-blur-md sm:bg-slate-100 sm:border-slate-800 border-[1px] sm:bg-opacity-5 sm:gap-4 sm:w-11/12 sm:z-30 sm:bottom-4">
        <Link
          className={`px-3 sm:px-2   text-slate-300 tracking-widest uppercase cursor-pointer ${
            currentRoute === "/"
              ? "  font-semibold text-xs "
              : " text-xs font-thin"
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`px-3 sm:px-6   text-slate-300  tracking-widest uppercase cursor-pointer border-x ${
            currentRoute === "/feed/[slug]"
              ? " text-xs font-semibold  "
              : " font-thin text-xs"
          }`}
          href="/feed/1"
        >
          News feed
        </Link>
        <Link
          className={`px-3 sm:px-2  text-slate-300 sm:w-24 text-center  tracking-widest uppercase cursor-pointer ${
            currentRoute === "/inSpaceNow"
              ? " font-semibold text-xs "
              : " font-thin text-xs"
          }`}
          href="/inSpaceNow"
        >
          In space now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
