import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
// import Logo from "./Logo";
import NavItem from "./NavItem";

const MENU_ITEMS = [
  {text: "Home", href: "/"},
  {text: "About", href: "/"},
  {text: "Contact", href: "/"},
];

const NavBar = () => {
  const [active, setActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">Neil'sTravelBlog</h1>
          </a>
        </Link>
        <div onClick={()=>setActive(!active)} className={`nav__menu-bar`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${active ? "active" : ""} nav__menu-list`}>
          {MENU_ITEMS.map((menu, idx) => (
            <div onClick={()=> {
              setActiveIndex(idx);
              setActive(false);
            }}
            key={menu.text}>
              <NavItem active={activeIndex === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
};

export default NavBar;