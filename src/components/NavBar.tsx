"use client";

import React, { useEffect, useState } from "react";
import NavButton from "@/components/NavButtons";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
  }, []);

  // Hide navbar on scroll down
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNav(false);
        setIsMenuOpen(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Lock body scroll when the drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-transform duration-300 ease-in-out
          ${showNav ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Centering and width control container */}
        <div className="mx-auto w-full md:w-[70%] md:max-w-2xl px-4 pt-4">
          <nav
            className={`
              flex items-center px-5 py-3
              bg-black/30 backdrop-blur-lg
              border border-white/20
              rounded-2xl md:rounded-full shadow-xl
              justify-center 
              ${mobileView ? "w-[60%]" : "w-full"}
              `}
          >
            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-8">
              <li><NavButton buttonName="Home" /></li>
              <li><NavButton buttonName="About Me" /></li>
              <li><NavButton buttonName="My Skills" /></li>
              <li><NavButton buttonName="Projects" /></li>
            </ul>

            {/* Mobile hamburger */}
            <button
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => {
                setIsMenuOpen(true);
                setMobileView(true);
              }}
              className="md:hidden text-white text-2xl"
            >
              <FiMenu />
            </button>
          </nav>
        </div>
      </header>

      {/* MOBILE DRAWER + OVERLAY */}
      <div
        className={`
          fixed inset-0 z-[100] md:hidden
          transition-opacity duration-200
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={closeMenu}
        />

        {/* Drawer */}
        <aside
          className={`
            absolute right-20 top-0 h-full w-4/5 max-w-xs
            bg-neutral-900 border-l border-white/20 shadow-2xl
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <button
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FiX />
          </button>

          <ul className="flex flex-col gap-6 p-6 mt-14">
            <li onClick={closeMenu}><NavButton buttonName="Home" /></li>
            <li onClick={closeMenu}><NavButton buttonName="About Me" /></li>
            <li onClick={closeMenu}><NavButton buttonName="My Skills" /></li>
            <li onClick={closeMenu}><NavButton buttonName="Projects" /></li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Navbar;