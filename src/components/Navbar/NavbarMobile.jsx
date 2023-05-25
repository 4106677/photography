import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavbarMobile = ({ nav, toggleNav, textColor }) => {
  return (
    <>
      <div onClick={toggleNav} className="block sm:hidden z-10">
        {nav ? (
          <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
        ) : (
          <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
        )}
      </div>

      <div
        className={
          nav
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
        }
      >
        <ul className="">
          <li onClick={toggleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/work">Work</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMobile;
