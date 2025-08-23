// In page.tsx
"use client";
import NavButton from "@/components/NavButtons";
import SocialLinks from "@/components/SocialLinks";
// No longer need to import Typewriter here
// FIX: Import the renamed component
import Home from '@/components/Home'; // Adjust the path if necessary
import Skills from "@/components/Skills";

export default function Portfolio() {
  return (
    <div className="flex flex-col content-center min-h-screen p-4 space-y-5">

      {/* Nav section */}
      <div className="flex flex-row justify-center items-center">
        <nav>
          <ul className="flex space-x-8">
            <li><NavButton buttonName="Home"></NavButton></li>
            <li><NavButton buttonName="About me"></NavButton></li>
            <li><NavButton buttonName="My Skills"></NavButton></li>
            <li><NavButton buttonName="Projects"></NavButton></li>
          </ul>
        </nav>
      </div>

      {/*Text section*/}
      {/* FIX: Call the renamed component */}
      <Home />

      <Skills />

      <div className="flex flex-col items-center space-y-5">
        <SocialLinks />
      </div>
    </div>
  );
}