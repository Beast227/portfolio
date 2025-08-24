"use client";

import Typewriter from 'typewriter-effect';
import Image from 'next/image';
// import profilePic from '../../public/profile.jpeg';

const Home = () => {
  return (
    <section id="Home" className="flex items-center hero-section justify-center w-full h-[calc(100vh-5rem)] px-2 relative overflow-hidden bg-black">
      
      {/* Torchlight background effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow behind the image */}
        <div className="absolute bg-radial from-blue-500/30 via-blue-500/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Glow behind the text */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[500px] bg-radial from-purple-500/30 via-purple-500/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content */}
      {/* <div className="relative z-10 grid items-center gap-12 md:grid-cols-2 max-w-9xl mx-auto"> */}
        
        {/* Column 1: Profile Image
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={profilePic}
              alt="Bangera Paveen"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-gray-600 shadow-lg"
              placeholder="blur"
            />
          </div>
        </div> */}

        {/* Column 2: Text Content */}
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

      {/* </div> */}
    </section>
  );
}

export default Home;
