"use client";

import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section id="Home" className="flex items-center hero-section justify-center w-full h-[calc(100vh-5rem)] relative overflow-hidden bg-black">
      
      {/* Torchlight background effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow behind the text */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[500px] bg-radial from-purple-500/30 via-purple-500/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <div 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white inline-block"
          style={{ minWidth: "25ch" }} // 👈 fixes shifting
        >
          <Typewriter
            options={{
              strings: [
                "Hello, I'm",
                "Bangera Paveen Sudhakar"
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
    </section>
  );
}

export default Home;
