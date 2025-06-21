import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { setShowLogin, backendUrl } = useContext(AppContext);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/forgot-password`, {
        email,
        newPassword,
      });

      if (data.success) {
        toast.success(data.message);
        navigate('/');            // ✅ Navigate to homepage
        setShowLogin(true);       // ✅ Show login modal
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={handleReset}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative bg-white px-8 py-10 rounded-xl text-slate-500 w-[300px]"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-semibold">Reset Password</h1>
        <p className="text-center text-sm mb-6">Enter your email and new password</p>

        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="icon" className="w-4 h-4 opacity-70" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none text-sm text-gray-700 bg-transparent w-full"
          />
        </div>

        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="icon" className="w-4 h-4 opacity-70" />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="outline-none text-sm text-gray-700 bg-transparent w-full"
          />
        </div>

        <button type="submit" className="bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd w-full text-white py-2 rounded-full mt-5">
          Reset Password
        </button>

        {/* ❌ FIX: Close Icon should go back and open login */}
        <img
          src={assets.cross_icon}
          alt="close"
          onClick={() => {
            navigate('/');
            setShowLogin(true);
          }}
          className="absolute top-5 right-5 cursor-pointer"
        />
      </motion.form>
    </div>
  );
};

export default ForgotPassword;
