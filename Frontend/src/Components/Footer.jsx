import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="w-full mt-20">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between py-4">
        {/* Left: Logo */}
        <img src={assets.logo} alt="Chali.AI Logo" className="w-32 sm:w-36" />

        {/* Middle: Copyright text */}
        <p className="text-sm text-gray-500 hidden sm:block flex-1 text-center">
          All rights reserved. Copyright @Chali.AI
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com/share/167sV9NAir/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6 hover:opacity-80 transition" />
          </a>
          <a href="https://www.linkedin.com/in/chamalharsha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <img src={assets.Linkedln_icon} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
          </a>
          <a href="https://www.instagram.com/_harsha_jrzz?igsh=MTNoeTM5bjU1NWFhMw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6 hover:opacity-80 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
