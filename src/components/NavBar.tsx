"use client";

import React, { useState, useEffect } from 'react';
// FIX: The import path was likely incorrect. Reverting to a potential plural filename.
// Please ensure your button component file is located at 'components/NavButtons.tsx' or adjust the path accordingly.
import NavButton from "@/components/NavButtons"; 

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Effect to handle showing/hiding the navbar on scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    // This outer container is fixed and handles the centering and the show/hide animation.
    <header 
      className={`
        fixed top-4 left-0 w-full z-50 flex justify-center
        transition-transform duration-300 ease-in-out
        ${showNav ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      {/* This is the visible, styled navbar element */}
      <nav 
        className="
          flex items-center justify-center space-x-4 px-8 py-4
          bg-black/30 backdrop-blur-lg 
          border border-white/[0.2] 
          rounded-full shadow-xl
        "
      >
        <ul className="flex items-center space-x-4 sm:space-x-8">
          <li><NavButton buttonName="Home" /></li>
          <li><NavButton buttonName="About me" /></li>
          <li><NavButton buttonName="My Skills" /></li>
          <li><NavButton buttonName="Projects" /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
