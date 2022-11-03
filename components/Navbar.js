import React from "react";

import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div>
        <h1>Space News</h1>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/feed/1">Feed</Link>
        <Link href="/whos_in_space">Who's in space RN</Link>
      </div>
    </nav>
  );
}

export default Navbar;
