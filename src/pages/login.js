import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext';

function Loginn() {
 
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate('/profile'); 
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center md:items-start pt-12 md:pt-24 bg-gray-100 h-screen">
      <div className="bg-white shadow-md rounded-lg h-auto md:h-[523.39px] w-[90%] md:w-[1360px] flex flex-col md:flex-row justify-center items-center p-4">
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/ec69/a4e4/6c21d583fca24d9604b381d37a07ab34?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZAZxzLZ3P4fe3IWZeiVPSOuPoEcwfdMUlDZJhufwuLqTbjh~p0fL6LnUrInhyHfCAN6G-IBWmLTMKkj5DIiBJ3upB48e1vZ9zhutYJ4mTYu8g8Mpxaqv5ZKyPQjCPc8yYe20wCPEVSABQxgUM9o1aVQ70BUWoI3T290b4WEjgku~fQPw6L~F2vh~U6iRCaUabHkuOPgOUHZtTCRVaOrRcjSDJCBbprTgT4GdpN-NQZJpHEJW49hV~N9hPLdgXo-B~q6IMrQQJCtDybVrFBkUevXP53bv1q3kw2ZcvOgCW1N6GrF0bTneZcx7ZggXl8Kji8ZdDFkfJmebXikKDudbg__"
            alt="Login Illustration"
            className="w-3/4"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-8">
          <h2 className="text-2xl md:text-4xl font-bold text-green-500 mb-4">Welcome Back</h2>
          <p className="text-gray-400 mb-8 text-lg md:text-xl">LOGIN TO CONTINUE</p>
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <p className="text-left text-gray-600 text-sm">
                <a href="#" className="text-gray-500 hover:text-green-800">Forget Password?</a>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" onClick={handleLogin}
              >
                LOGIN
              </button>
            </div>
          </form>
          <p className="text-gray-600 text-sm mt-4">
            NEW USER? <a href="#" className="text-green-500 hover:text-green-800">SIGN UP</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginn;
