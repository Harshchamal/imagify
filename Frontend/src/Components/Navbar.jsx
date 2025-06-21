import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between py-4">
        {/* Left: Logo */}
        <Link to="/">
          <img src={assets.logo} alt="Chali.AI Logo" className="w-32 sm:w-36 lg:w-40" />
        </Link>

        {/* Right: Login / Profile */}
        {user ? (
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/buy')}
              className="flex items-center gap-2 bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd px-5 py-2 rounded-full hover:scale-105 transition"
            >
              <img className="w-5" src={assets.credit_star} alt="Credit" />
              <p className="text-sm text-white">Credit: {credit}</p>
            </button>

            <p className="text-white hidden sm:block">Hi, {user.name}</p>

            <div className="relative group">
              <img src={assets.profile_icon} className="w-10 cursor-pointer" alt="Profile" />
              <div className="absolute hidden group-hover:block top-10 right-0 bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd shadow-md rounded-md z-10">
                <ul className="text-sm p-2">
                  <li
                    onClick={logout}
                    className="py-1 px-4 cursor-pointer  rounded"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd text-white px-6 py-2 rounded-full text-sm"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
