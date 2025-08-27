// In page.tsx
"use client";
import NavButton from "@/components/NavButtons";
import SocialLinks from "@/components/SocialLinks";
// No longer need to import Typewriter here
// FIX: Import the renamed component
import Home from '@/components/Home'; // Adjust the path if necessary
import Skills from "@/components/Skills";
import Navbar from "@/components/NavBar";
import Project from "@/components/Project";

export default function Portfolio() {
  return (
    <div className="flex flex-col content-center min-h-screen">

      {/* Nav section */}
      <Navbar />

      {/*Text section*/}
      {/* FIX: Call the renamed component */}
      <Home />

      <Skills />

      <Project />

      <div className="flex flex-col items-center space-y-5">
        <SocialLinks />
      </div>
    </div>
  );
}