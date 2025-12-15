"use client";
import NavLink from "@/components/NavLink/NavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const path = usePathname();
  console.log(path);
  if (path.startsWith("/dashboard")) return <></>;
  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/about">About</NavLink>
      </li>
      <li>
        <NavLink href="/stories">Stories</NavLink>
      </li>
      <li>
        <NavLink href="/tutorial">Tutorial</NavLink>
      </li>
      <li>
        <NavLink href="/login">Login</NavLink>
      </li>

      <li>
        <NavLink href={"/register"}>Register</NavLink>
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
