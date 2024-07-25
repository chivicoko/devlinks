"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    let valid = true;
    if (!email) {
      setEmailError("Can't be empty");
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please check again');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      // Handle login logic here
      router.push('/links')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100 text-[#737373]">
      <div className="flex w-full items-center justify-start pl-12 md:pl-0 md:justify-center mb-14 space-x-2">
        <span className="relative w-12 h-12">
          <Image src="/images/solar_link-circle-bold.png" alt="devlinks Logo" layout="fill" objectFit="contain" />
        </span>
        <h2 className="text-[#333] text-4xl font-bold flex items-center">devlinks</h2>
      </div>
      <div className="bg-[rgb(240, 240, 240)] md:bg-white p-[32px] md:p-[40px] rounded-lg w-full max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-[24px] md:text-4xl font-bold mb-4 md:mt-2 text-gray-800">Login</h2>
        <p className="text-base mb-10">Add your details below to get back into the app</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email" className={`text-xs font-semibold ${emailError ? 'text-red-500' : 'text-gray-500'}`}>Email address</label>
          <div className={`mb-4 p-3 flex items-center border rounded-lg ${emailError ? 'border-red-500' : 'border-gray-300'} focus-within:border-[#633CFF] focus-within:ring-1 focus-within:ring-[#633CFF] focus-within:shadow-[0_0_10px_0_rgba(99,60,255,0.5),0_0_20px_5px_rgba(99,60,255,0.05)]`}>
            <span className="relative w-4 h-5 flex-shrink-0">
              <Image src="/images/ph_envelope-simple-fill.svg" alt="Email Icon" layout="fill" objectFit="contain" />
            </span>
            <input
              className="w-full bg-[#f5f5f5] md:bg-white border-none pl-3 text-base text-gray-700 leading-tight focus:outline-none focus:ring-0"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. alex@example.com"
            />
            {emailError && <span className="text-xs text-red-500 ml-2 w-[135px] flex justify-end">{emailError}</span>}
          </div>
          <label htmlFor="password" className={`text-xs font-semibold ${passwordError ? 'text-red-500' : 'text-gray-500'}`}>Password</label>
          <div className={`mb-6 p-3 flex items-center border rounded-lg ${passwordError ? 'border-red-500' : 'border-gray-300'} focus-within:border-[#633CFF] focus-within:ring-1 focus-within:ring-[#633CFF] focus-within:shadow-[0_0_10px_0_rgba(99,60,255,0.5),0_0_20px_5px_rgba(99,60,255,0.05)]`}>
            <span className="relative w-4 h-5 flex-shrink-0">
              <Image src="/images/ph_lock-key-fill.svg" alt="Password Icon" layout="fill" objectFit="contain" />
            </span>
            <input
              className="w-full bg-[#f5f5f5] md:bg-white border-none pl-3 text-base text-gray-700 focus:outline-none focus:ring-0"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {passwordError && <span className="text-xs text-red-500 ml-2 w-[200px] flex justify-end">{passwordError}</span>}
          </div>
          <button
            className="w-full bg-[#633CFF] hover:bg-[#BEADFF] text-white font-bold py-3 px-4 rounded-lg focus:bg-[#BEADFF] focus:outline-none mb-6"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="text-center">
            Don't have an account?
            <Link
              className="text-[#633CFF] ml-1 hover:underline"
              href="/register"
            >
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
