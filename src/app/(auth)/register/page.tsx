"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Register: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  const handleRegister = () => {
    let valid = true;
    
    if (!email) {
      setEmailError("Can't be empty");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError("Can't be empty");
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError('At least 8 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Can't be empty");
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (valid) {
      // Handle register logic here
      router.push('/login')
    }
  };

  return (
    <div className="min-h-screen py-[32px] md:py-[137px] flex items-center justify-center flex-col bg-[#f5f5f5] text-[#737373]">
      <div className="flex w-full items-center justify-start pl-12 md:pl-0 md:justify-center mb-14 space-x-2">
        <span className="relative w-12 h-12">
          <Image src="/images/solar_link-circle-bold.png" alt="devlinks Logo" layout="fill" objectFit="contain" />
        </span>
        <h2 className="text-[#333] text-3xl md:text-4xl font-bold flex md:items-center">devlinks</h2>
      </div>
      <div className="bg-[rgb(240, 240, 240)] md:bg-white p-[32px] md:p-[40px] rounded-lg w-full max-w-lg">
        <h2 className="text-[24px] md:text-4xl font-bold mb-4 md:mt-2 text-gray-800">Create account</h2>
        <p className="text-base mb-10">Let's get you started sharing links!</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email" className={`text-xs font-semibold ${emailError ? 'text-red-500' : 'text-gray-500'}`}>Email address</label>
          <div className={`mb-4 p-3 flex items-center border rounded-lg ${emailError ? 'border-red-500' : 'border-gray-300'} focus-within:border-[#633CFF] focus-within:ring-1 focus-within:ring-[#633CFF] focus-within:shadow-[0_0_10px_0_rgba(99,60,255,0.5),0_0_20px_5px_rgba(99,60,255,0.05)]`}>
            <span className="relative w-4 h-5 flex-shrink-0">
              <Image src="/images/ph_envelope-simple-fill.svg" alt="Email Icon" layout="fill" objectFit="contain" />
            </span>
            <input
              className="bg-[#f5f5f5] md:bg-white w-full border-none pl-3 text-base text-gray-700 leading-tight focus:outline-none focus:ring-0"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. alex@email.com"
            />
            {emailError && <span className="text-xs text-red-500 ml-2 w-[190px] flex justify-end">{emailError}</span>}
          </div>
          <label htmlFor="password" className={`text-xs font-semibold ${passwordError ? 'text-red-500' : 'text-gray-500'}`}>Create password</label>
          <div className={`mb-6 p-3 flex items-center border rounded-lg ${passwordError ? 'border-red-500' : 'border-gray-300'} focus-within:border-[#633CFF] focus-within:ring-1 focus-within:ring-[#633CFF] focus-within:shadow-[0_0_10px_0_rgba(99,60,255,0.5),0_0_20px_5px_rgba(99,60,255,0.05)]`}>
            <span className="relative w-4 h-5 flex-shrink-0">
              <Image src="/images/ph_lock-key-fill.svg" alt="Password Icon" layout="fill" objectFit="contain" />
            </span>
            <input
              className="bg-[#f5f5f5] md:bg-white w-full border-none pl-3 text-base text-gray-700 focus:outline-none focus:ring-0"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
            />
            {passwordError && <span className="text-xs text-red-500 ml-2 w-[250px] flex justify-end">{passwordError}</span>}
          </div>
          <label htmlFor="confirm-password" className={`text-xs font-semibold ${confirmPasswordError ? 'text-red-500' : 'text-gray-500'}`}>Confirm password</label>
          <div className={`mb-6 p-3 flex items-center border rounded-lg ${confirmPasswordError ? 'border-red-500' : 'border-gray-300'} focus-within:border-[#633CFF] focus-within:ring-1 focus-within:ring-[#633CFF] focus-within:shadow-[0_0_10px_0_rgba(99,60,255,0.5),0_0_20px_5px_rgba(99,60,255,0.05)]`}>
            <span className="relative w-4 h-5 flex-shrink-0">
              <Image src="/images/ph_lock-key-fill.svg" alt="Password Icon" layout="fill" objectFit="contain" />
            </span>
            <input
              className="bg-[#f5f5f5] md:bg-white w-full border-none pl-3 text-base text-gray-700 focus:outline-none focus:ring-0"
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="At least 8 characters"
            />
            {confirmPasswordError && <span className="text-xs text-red-500 ml-2 w-[250px] flex justify-end">{confirmPasswordError}</span>}
          </div>
          <p className='text-xs mb-6'>Password must contain at least 8 characters</p>
          <button
            className="w-full bg-[#633CFF] hover:bg-[#BEADFF] text-white font-bold py-3 px-4 rounded-lg focus:bg-[#BEADFF] focus:outline-none mb-6"
            type="button"
            onClick={handleRegister}
          >
            Create new account
          </button>
          <p className="text-center">
            Already have an account?
            <Link
              className="text-[#633CFF] ml-1 hover:underline"
              href="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
