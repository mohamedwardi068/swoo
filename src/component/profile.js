import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authcontext';

function Profile() {
  const { user } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row p-4 md:p-10 justify-center border-0 rounded-lg">
      <div className="flex flex-col items-center w-full md:w-1/4 bg-white shadow-md rounded-lg p-4">
        <img
          src="https://s3-alpha-sig.figma.com/img/e106/1d6d/7a2a7662770083f211f37bc54523a829?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zk5RXUI3LoaN4LmuD5kIQIzvrPh6o0fmPEAe7X1E6VoDxgz23YVZOvIyz2FzyhcOj0taZg6P3vwTlrfmmSwvUd1IBAWqHNpId31N-ZrH~Dk6AkxJLiujQjYZZ3nsgsURIDDvHkqQBjrRQtVmTMBdwpE828DdEXX6rk9PflYsL-SEjEmMSQDYMG01miwWDn0iXdJ3t5ASUuYTJeQagJrszpMtTQfYnUyq3i-Jf3ALnZfCZOm4PU-wPvrPTq6n6d1fqMuuhuRda8l0rSd53bIwEuHjvA2RS8EUbR5xrFrqgfOD9IC405Hf~SUjvyZuewob-Q4Hx4~itCDbaI-oAtxQZg__"
          alt="User Profile"
          className="w-24 h-24 md:w-30 md:h-30 mb-2"
        />
        <h3 className="text-lg md:text-xl font-extrabold mt-2">{firstName} {lastName}</h3>
        <p className="text-gray-500 text-base md:text-lg">{email}</p>
        <div className="flex flex-col gap-2 md:gap-4 mt-4 w-full">
          <div className="flex items-center justify-between px-4 py-2 rounded-md bg-gray-100 hover:bg-green-500 hover:text-white">
            <span className="font-medium">Account info</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
          <div className="flex items-center justify-between px-4 py-2 rounded-md bg-gray-100 hover:bg-green-500 hover:text-white">
            <span className="font-medium">My order</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
          <div className="flex items-center justify-between px-4 py-2 rounded-md bg-gray-100 hover:bg-green-500 hover:text-white">
            <span className="font-medium">My address</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
          <div className="flex items-center justify-between px-4 py-2 rounded-md bg-gray-100 hover:bg-green-500 hover:text-white">
            <span className="font-medium">Change password</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/4 bg-white shadow-md rounded-lg p-4 md:p-6 mt-4 md:mt-0 md:ml-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Account Info</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 text-lg font-bold mb-2">
                First Name <span className='text-red-600'>*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[60%] border-gray-300"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 text-lg font-bold mb-2 ">
                Last Name <span className='text-red-600'>*</span>
              </label>
              <input
                type="text"
                id="lastName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[60%] border-gray-300"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2 mt-6 pt-2">
              Email Address <span className='text-red-600'>*</span>
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 hadow  py-4 px-6  focus:shadow-outline " 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 text-lg font-bold mb-2 mt-6 pt-2">
                Phone Number <span className='text-gray-400'>(Optional)</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="shadow appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 "
                value={phoneNumber}
                placeholder='+1261111111'
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline mt-8"
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>

  );
}

export default Profile;
