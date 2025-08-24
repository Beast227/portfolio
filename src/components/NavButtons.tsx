// In components/NavButton.tsx

"use client"

import React from 'react';
import styled from 'styled-components';

interface NavButtonProps {
  buttonName: string;
}

const NavButton = ({ buttonName } : NavButtonProps) => {
  return (
    <StyledWrapper>
      <a className="button" href={`#${buttonName}`}>{buttonName}</a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    min-width: 120px;
    position: relative;
    cursor: pointer;
    padding: 12px 17px;
    border: 0;
    border-radius: 7px;
    color: rgb(255, 255, 255, 0.7);
    font-weight: 500;
    text-align: center;
    background-color: transparent; // Start with no background

    /* Faster, smoother transition for all properties */
    transition: all 0.4s ease-in-out;
  }

  /* This is the underline element */
  .button::before {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
    
    /* Start scaled down to 0, making it invisible */
    transform: scaleX(0);
    transform-origin: center; /* Ensures it grows from the middle */

    /* Transition the transform property for the growth effect */
    transition: transform 0.4s ease-in-out;
  }

  .button:hover {
    color: white;
    transform: scale(1.05) translateY(-2px); /* Slightly more subtle transform */
    background-color: rgba(255, 255, 255, 0.1); /* Add a subtle glow */
  }

  /* On hover, scale the underline to its full width */
  .button:hover::before {
    transform: scaleX(1);
  }
`;

export default NavButton;