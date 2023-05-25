import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const toggleNav = () => setNav(!nav);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Captur
          </h1>
        </Link>

        <NavbarDesktop textColor={textColor} />
        <NavbarMobile nav={nav} toggleNav={toggleNav} textColor={textColor} />
      </div>
    </div>
  );
};

export default Navbar;
