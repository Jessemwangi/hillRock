import React from 'react';

const ScrollLink = ({to, children }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById(to);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      return (
        <a href={to} onClick={handleClick}>
          {children}
        </a>
      );
};

export default ScrollLink;