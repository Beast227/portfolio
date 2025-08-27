"use client";

import React from 'react';
// Import the FileText icon for the resume button
import { Cpu, Database, Code, FileText } from 'lucide-react'; 

const skills = [
    {
        icon: Cpu,
        title: "Data Structures & Algorithms",
        description: "Proficient in C++, focusing on efficient problem-solving and foundational computer science principles."
    },
    {
        icon: Database,
        title: "Backend Development",
        description: "Experienced in creating robust APIs and server-side functionality using Express.js and the Node.js ecosystem."
    },
    {
        icon: Code,
        title: "Frontend Development",
        description: "Skilled in integrating APIs with Next.js to implement application logic."
    }
];

export default function About() {
    return (
        // Section container with dark theme and background glow
        <section id="About Me" className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background radial gradient for a consistent glow effect */}
            <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-radial from-purple-500/15 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
                    About Me
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Column 1: Personal Introduction */}
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I am a Computer Science and Engineering undergraduate with a strong passion for Full-Stack Development. My journey has been shaped by hands-on experience, most notably leading the technical management of the <strong className="text-purple-400">Aakriti 2025</strong> website—the official techno-cultural fest at Canara Engineering College.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            My expertise lies in bridging the gap between complex backend logic and seamless frontend user experiences, ensuring that applications are both powerful and intuitive.
                        </p>
                        {/* Resume Link Button */}
                        <div className="mt-8">
                            <a 
                                href="https://drive.google.com/file/d/1r0oO-_avCQcf-yUUNUJEdUpvLj1OrRi5/view?usp=sharing" // <-- REPLACE WITH YOUR GOOGLE DRIVE LINK
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500 text-purple-300 font-medium py-3 px-6 rounded-lg
                                           transition-all duration-300 ease-in-out
                                           hover:bg-purple-500/30 hover:text-white hover:shadow-purple-500/20 hover:shadow-lg hover:-translate-y-1"
                            >
                                <FileText className="h-5 w-5" />
                                View My Resume
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Technical Strengths */}
                    <div className="space-y-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 h-12 w-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center">
                                    <skill.icon className="h-6 w-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-100">{skill.title}</h3>
                                    <p className="text-gray-400 mt-1">{skill.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
