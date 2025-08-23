"use client";

import React from "react";

// --- Skills Data ---
const skills = [
  { name: "C++", icon: "https://cdn.simpleicons.org/c++/FFFFFF" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/FFFFFF" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/FFFFFF" },
  { name: "Java", icon: "/java.svg" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/FFFFFF" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/FFFFFF" },
  {
    name: "SQL",
    icon: "https://api.iconify.design/mdi/database.svg?color=white",
  },
];

const SkillsSection = () => {
  return (
    <section className="w-full relative py-16 sm:py-24 overflow-hidden" id="My Skills">
      {/* Starry BG (optional) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(88,28,135,0.3),_transparent_70%)]"></div>
      <div className="absolute inset-0 bg-black opacity-90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-black via-purple-900/30 to-black border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
          <div className="relative flex gap-x-8 py-8 group">
            <div className="flex items-center gap-x-8 animate-marquee group-hover:pause">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-4 px-6 py-4 bg-gray-800/70 rounded-lg shadow-md hover:scale-105 transition-transform"
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className="h-10 w-10 object-contain flex-shrink-0"
                  />
                  <p className="text-lg sm:text-xl font-semibold text-gray-200 whitespace-nowrap">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
