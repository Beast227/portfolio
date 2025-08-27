"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Using an icon for a cleaner look

// Your project data
const projects = [
    {
        title: "Social Cause Website",
        description: "Building a digital platform for the India Positive Citizenship Challenge, where individuals can take up volunteering tasks and community initiatives that contribute to the betterment of society.",
        link: "https://social-cause-admin-frontend.vercel.app"
    },
    {
        title: "Hotel Management",
        description: "Designed and developed a web portal for a hotel, enabling seamless room booking, cancellations, and automated refund processing.",
        link: "https://example.com/project-two"
    },
    {
        title: "Aakriti Website",
        description: "Developed a web portal for a techno-cultural fest, enabling event registration, team creation, and online payments.",
        link: "https://aakriti.canaraengineering.in"
    }
];

export default function Project() {
    return (
        // Section container with a dark background, padding, and a subtle background glow
        <section id="Projects" className="relative bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
            {/* Background radial gradient for a glow effect - Switched to purple */}
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-radial from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
                    My Projects
                </h2>

                {/* Grid layout for project cards with increased gap for more space */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            // Glassmorphism card effect with transitions for a smooth hover - Switched to purple
                            className="group relative bg-gray-900/40 backdrop-blur-sm border border-gray-700 p-6 rounded-xl shadow-lg 
                                       transition-all duration-300 ease-in-out 
                                       hover:border-purple-500 hover:shadow-purple-500/20 hover:-translate-y-2"
                        >
                            {/* Card content */}
                            <h3 className="text-2xl font-semibold mb-3 text-gray-100">{project.title}</h3>
                            <p className="text-gray-400 mb-6">{project.description}</p>
                            
                            {/* Styled link that acts like a button - Switched to purple */}
                            <a 
                                href={project.link} 
                                className="inline-flex items-center font-medium text-purple-400 group-hover:text-purple-300 transition-colors duration-300" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View Project
                                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
