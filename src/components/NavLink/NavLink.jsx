"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const pathname = usePathname();

  const isActive =
    href === "/"? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`
        ${isActive ? "bg-sky-700 p-3 text-white" : "p-3 text-gray-300 hover:bg-sky-800"}
      `}
    >
      {children}
    </Link>
  );
}

export default NavLink;
