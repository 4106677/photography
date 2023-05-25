import React from "react";
import Link from "next/link";

const NavbarDesktop = ({ textColor }) => {
  return (
    <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
      <li className="p-4 ">
        <Link href="/">Home</Link>
      </li>
      <li className="p-4 ">
        <Link href="/#gallery">Gallery</Link>
      </li>
      <li className="p-4 ">
        <Link href="/work">Work</Link>
      </li>
      <li className="p-4 ">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavbarDesktop;
