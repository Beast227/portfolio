"use client";
import SocialLinks from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-5">

      {/*Text section*/}
      <div className="flex flex-col space-y-15">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-left">Welcome,</p>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">I am Full Stack Developer</p>
      </div>

      <div className="flex flex-col items-center space-y-5 top-25 relative">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Let's connect</p>
        <SocialLinks />
      </div>
    </div>
  );
}
