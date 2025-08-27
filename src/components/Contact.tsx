"use client";

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react'; // Using icons for a cleaner look

// Social links data
const socialLinks = [
    {
        icon: Github,
        href: "https://github.com/Beast227",
        ariaLabel: "GitHub Profile",
        hoverBg: "hover:bg-gray-700",
        hoverOutline: "hover:outline-gray-700"
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/bangerapaveen/",
        ariaLabel: "LinkedIn Profile",
        hoverBg: "hover:bg-blue-600",
        hoverOutline: "hover:outline-blue-600"
    },
    {
        icon: Mail,
        href: "mailto:pavin227@gmail.com",
        ariaLabel: "Send an Email",
        hoverBg: "hover:bg-red-600",
        hoverOutline: "hover:outline-red-600"
    }
];

export default function Contact() {
    return (
        <section
            id="Contact"
            className="relative w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Radial Glow */}
            <div className="absolute top-1/2 left-1/2 w-[700px] h-[300px] bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
                <p className="text-lg text-gray-400 mb-12">
                    I&apos;m always open to discussing new projects, creative ideas, or
                    opportunities to be part of your visions.
                </p>

                <div className="flex justify-center items-center gap-8">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            aria-label={link.ariaLabel}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
            group inline-flex items-center justify-center w-16 h-16 text-white no-underline
            outline outline-gray-600 rounded-full
            transition-all duration-300 ease-in-out
            hover:outline-offset-4 hover:scale-110
            ${link.hoverBg} ${link.hoverOutline}
          `}
                        >
                            <link.icon className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
                        </a>
                    ))}
                </div>
            </div>
        </section>

    );
}
