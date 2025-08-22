"use client";
import NavButton from "@/components/NavButtons";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
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
      <div className="flex flex-col space-y-15 items-center">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-left">Welcome,</p>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">I am Full Stack Developer</p>
      </div>

      <div className="flex flex-col items-center space-y-5">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Let's connect</p>
        <SocialLinks />
      </div>
    </div>
  );
}
