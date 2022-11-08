import Link from "next/link";

function Navbar(props) {
  return (
    <nav className=" w-full flex  justify-between h-16 items-center w-100% sm:px-0 px-5">
      <div>
        <img
          className="w-40 pt-2 pl-3 sm:pl-5"
          src="/space-news-logo.svg"
          alt="space news logo"
        />
      </div>
      <div className="flex sm:bg-black sm:m-auto sm:left-0 sm:right-0 sm:fixed sm:justify-center sm:rounded-lg sm:h-12 sm:opacity-95 sm:items-center sm:bg-slate-900 sm:gap-4 sm:w-11/12 sm:z-30 sm:bottom-4">
        <Link
          onClick={() => props.changePage("home")}
          className={`px-3 text-xs font-bold tracking-widest uppercase cursor-pointer ${
            props.page === "home" ? "text-orange-400" : "text-slate-300"
          } `}
          href="/"
        >
          Home
        </Link>
        <Link
          onClick={() => props.changePage("feed")}
          className={`px-3 sm:px-7  text-xs font-bold tracking-widest uppercase cursor-pointer border-x ${
            props.page === "feed" ? "text-orange-400" : "text-slate-300"
          }`}
          href="/feed/1"
        >
          News feed
        </Link>
        <Link
          onClick={() => props.changePage("isn")}
          className={`px-3 text-xs sm:w-24 text-center font-bold tracking-widest uppercase cursor-pointer ${
            props.page === "isn" ? "text-orange-400" : "text-slate-300"
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
