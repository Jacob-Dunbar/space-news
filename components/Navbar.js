import React from "react";

import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-600 flex justify-between h-12 items-center w-100% px-5">
      <div>
        <h1 className="">Space News</h1>
      </div>
      <div className="flex gap-4">
        <Link className="cursor-pointer " href="/">
          Home
        </Link>
        <Link className="cursor-pointer " href="/feed/1">
          Feed
        </Link>
        <Link className="cursor-pointer " href="/whos_in_space">
          Who's in space RN
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
