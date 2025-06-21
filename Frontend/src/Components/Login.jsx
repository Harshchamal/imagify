import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'motion/react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/60 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white px-8 py-10 rounded-xl text-slate-600 w-[300px] shadow-xl"
      >
        <h1 className="text-center text-2xl text-neutral-800 font-semibold">{state}</h1>
        <p className="text-center text-sm mb-6">Welcome back! Please sign in to continue</p>

        {state !== 'Login' && (
          <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
            <img src={assets.user_lock} alt="icon" className="w-4 h-4 opacity-70" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              required
              className="outline-none text-sm text-gray-700 bg-transparent w-full"
            />
          </div>
        )}

        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="icon" className="w-4 h-4 opacity-70" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email id"
            required
            className="outline-none text-sm text-gray-700 bg-transparent w-full"
          />
        </div>

        <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="icon" className="w-4 h-4 opacity-70" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="outline-none text-sm text-gray-700 bg-transparent w-full"
          />
        </div>

        {state === 'Login' && (
          <p
            className="text-sm text-blue-600 my-4 cursor-pointer"
            onClick={() => {
              setShowLogin(false);
              navigate('/reset-password');
            }}
          >
            Forgot password?
          </p>
        )}

        <button className="bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd w-full text-white py-2 rounded-full mt-2 hover:bg-blue-700 transition">
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        {state === 'Login' ? (
          <p className="mt-5 text-center text-sm">
            Don’t have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={() => setState('Sign up')}>
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center text-sm">
            Already have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={() => setState('Login')}>
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="close"
          className="absolute top-5 right-5 cursor-pointer w-4 h-4"
        />
      </motion.form>
    </div>
  );
};

export default Login;
