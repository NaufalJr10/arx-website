import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/arx-logo.png" 
        alt="ARX - A Woman in Need" 
        className="h-20 w-auto" // Increased from h-12 to h-20
      />
      <span className="sr-only">ARX - A Woman in Need</span>
    </Link>
  );
}




