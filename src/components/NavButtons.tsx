"use client"

import React from 'react';
import styled from 'styled-components';

interface NavButtonProps {
  buttonName: string;
}

const NavButton = ({ buttonName } : NavButtonProps) => {
  return (
    <StyledWrapper>
      {/* The href will link to an ID on your page, e.g., <section id="About Me"> */}
      <a className="button" href={`#${buttonName}`}>
        {buttonName}
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    min-width: 100px; /* Made slightly smaller for flexibility */
    position: relative;
    cursor: pointer;
    padding: 12px 17px;
    border: 0;
    border-radius: 7px;
    color: rgb(255, 255, 255, 0.7);
    font-weight: 500;
    text-align: center;
    background-color: transparent;
    transition: all 0.4s ease-in-out;
  }

  .button::before {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    
    /* --- CHANGE: Underline color is now purple --- */
    background: #A855F7; /* A nice purple color */
    
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.4s ease-in-out;
  }

  .button:hover {
    color: white;
    transform: scale(1.05) translateY(-2px);
    
    /* --- CHANGE: Hover background is now a purple glow --- */
    background-color: rgba(168, 85, 247, 0.15); 
  }

  .button:hover::before {
    transform: scaleX(1);
  }
`;

export default NavButton;