import Link from "next/link";
import React from "react";

function Header() {
  const links = (
    <>
    <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/stories">Stories</Link>
      </li>
      <li>
        <Link href="/tutorial">Tutorial</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
      
      <li>
        <Link href={"/register"}>Register</Link>
      </li>
    </>
  );
  return (
    <div className="py-4 px-6 bg-black/90 flex items-center justify-between flex-wrap">
      <h3 className="text-lg font-semibold">👨🏻‍💻 Dev Story</h3>
      <ul className="flex items-center space-x-4">{links}</ul>
    </div>
  );
}

export default Header;
