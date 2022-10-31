import React from "react";
import css from "../css/Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className={css.logo}>
        <h1>Space News</h1>
      </div>
      <div className={css.menu}>
        <Link href="/">Home</Link>
        <Link href="/feed/1">Feed</Link>
        <Link href="/whos_in_space">Who's in space RN</Link>
      </div>
    </nav>
  );
}

export default Navbar;
