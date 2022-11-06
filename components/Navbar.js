import Link from "next/link";

function Navbar(props) {
  console.log(props.page);
  return (
    <nav className=" w-full flex justify-between h-16 items-center w-100% px-5">
      <div>
        <img
          className="w-40 pt-2 pl-3"
          src="/space-news-logo.svg"
          alt="space news logo"
        />
      </div>
      <div className="flex">
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
          className={`px-3 text-xs font-bold tracking-widest uppercase cursor-pointer border-x ${
            props.page === "feed" ? "text-orange-400" : "text-slate-300"
          }`}
          href="/feed/1"
        >
          News feed
        </Link>
        <Link
          onClick={() => props.changePage("isn")}
          className={`px-3 text-xs font-bold tracking-widest uppercase cursor-pointer ${
            props.page === "isn" ? "text-orange-400" : "text-slate-300"
          }`}
          href="/in-space-now"
        >
          In space now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
