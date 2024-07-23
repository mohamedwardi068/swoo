import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const Navigate=useNavigate()
  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/bf74/0992/fcc730a1999fdc3467b89ea1c32158d6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lp8tfz5OwD3cZ7wcgClUgXXj0NPEBMVV8iJrfszbEcLVblbQwWZvQS9BhS5uNPTknCT-m0Imx8GCnSU3tG2pdWU9kEToGQcxjm3RB78udLWZnQj8eUa3XfPRrbAd7ed1d5bj9emCNKMfBKOwUap0bYDQQ77Oge5byE3vj2-NT3myttU4ar7uAoVeQaDvZVJsDwHzssldi5icSVZOu9At-sYH3K437~pfQO~~PoAwdqx5q0h5WK6Ie94AqdcoisQ2ISOpBoFBPUMF-FZaZ~xWQX65mSPvM7JAyUQbpQk1a93mH7~QGnItqGxuv~YyzUAr1EvJwhp~ieOSNNL2MBqZoQ__)'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-between text-white p-4">
          <div className="w-full flex justify-between">
            <button className="text-2xl flex items-center space-x-4 mr-5">
              <FaBars />
              <span>   Menu</span>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="text-3xl font-bold">Book Shop</div>
          </div>
          <div className="flex space-x-4 mt-4 items-center justify-center">
            <a  className="text-2xl "><FaFacebook /></a>
            <a  className="text-2xl"><FaTwitter /></a>
            <a  className="text-2xl"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4">
          <h1 className="text-3xl mb-6 font-bold">Login</h1>
          <p className="mb-4">Please select your account</p>
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 border rounded">
              <div className="flex items-center">
                <img
                  src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                  alt="Avatar"
                  className="w-5 h-5 rounded-full mr-4"
                />
                <span>Welcome back, <strong>Hamid</strong></span>
              </div>
              <button className="text-red-500">Remove</button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <a  className="text-black">Login to a different account</a>
            <button className="bg-blue-500 text-white py-2 px-4 font-bold rounded-lg" onClick={()=>{Navigate("/login")}}>Login  &gt;</button>
          </div>

          <hr className="my-5" />

          <div className="flex items-center justify-between mb-6">
            <a  className="text-black ">Don’t have an account?</a>
            <button className="text-blue-500 py-2 px-4 rounded font-bold" onClick={()=>{Navigate("/signup")}}>Sign up</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
