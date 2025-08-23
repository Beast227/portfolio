"use client";

import Typewriter from 'typewriter-effect';
import Image from 'next/image';

// --- IMPORTANT ---
// 1. Make sure your image 'profile.jpeg' is inside the `public` folder.
// 2. The `src` prop below now uses the correct root path.
import profilePic from '../../public/profile.jpeg'; // Adjust the path if necessary

const HeroText = () => {
  return (
    // Section container: takes up the full screen height
    <section className="flex items-center justify-center w-full min-h-screen px-4 py-16 md:py-20">
      <div className="grid items-center gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        
        {/* Column 1: Profile Image */}
        {/* On mobile this appears first (on top) */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={profilePic} // Corrected path for images in the /public folder
              alt="Bangera Paveen"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-blue-500/50 shadow-2xl"
              placeholder="blur"
            />
          </div>
        </div>

        {/* Column 2: Text Content */}
        {/* On mobile this appears second (below the image) */}
        <div className="text-center md:text-left">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            <Typewriter
              options={{
                strings: [
                  "Hello, I'm",
                  "Bangera Paveen"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            A passionate Full-Stack Developer creating modern web experiences.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HeroText;