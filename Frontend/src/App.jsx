import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home';
import Result from './Pages/Result';
import BuyCredit from './Pages/BuyCredit';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import ForgotPassword from './Pages/ForgotPassword';
import { AppContext } from './context/AppContext';

// ✅ Add this
import BackgroundWrapper from './Components/BackgroundWrapper';

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-white">
        <ToastContainer position="bottom-right" />
        <Navbar />
        {showLogin && <Login />} {/*  Will now appear above background */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
        </Routes>

        <Footer />
      </div>
    </BackgroundWrapper>
  );
};

export default App;
