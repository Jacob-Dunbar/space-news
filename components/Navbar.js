import React from "react";

import Link from "next/link";

function Navbar() {
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
          className="px-3 text-xs font-bold tracking-widest uppercase cursor-pointer text-slate-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="px-3 text-xs font-bold tracking-widest uppercase cursor-pointer border-x text-slate-300"
          href="/feed/1"
        >
          News feed
        </Link>
        <Link
          className="px-3 text-xs font-bold tracking-widest uppercase cursor-pointer text-slate-300"
          href="/whos_in_space"
        >
          In space now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
