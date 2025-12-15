import Link from "next/link";
import React from "react";

function layout({ children }) {
  const sideLinks = (
    <>
      <li>
        <Link href="/add-story">Add Story</Link>
      </li>
      <li>
        <Link href="/my-profile">Profile</Link>
      </li>
      <li>
        <Link href="/tutorial">Tutorial</Link>
      </li>
      <li>
        <Link href="/settings">Settings</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="py-4 px-6 bg-black/90 flex items-center justify-between flex-wrap">
        <h3 className="text-lg font-semibold">👨🏻‍💻 Dev Story</h3>
        {/* <ul className="flex items-center space-x-4">{links}</ul> */}
      </div>
      <div className="grid grid-cols-12 gap-3 mt-8 h-screen">
        <aside className="col-span-3 border ">
          <ul className="flex flex-col gap-3 items-center mt-4">{sideLinks}</ul>
        </aside>
        <main className="col-span-9 border">{children}</main>
      </div>
    </>
  );
}

export default layout;
