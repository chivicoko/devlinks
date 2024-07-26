"use client";

import Navbar from '@/components/navbar/Navbar';
import { showToast } from '@/components/toast/CustomToast';
import Image from 'next/image';
import React, { useState } from 'react';

const Links: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [errors, setErrors] = useState<{ firstName: string; lastName: string; email: string }>({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'firstName') setFirstName(value);
    if (id === 'lastName') setLastName(value);
    if (id === 'email') setEmail(value);
  };

  const validateInputs = () => {
    const newErrors = { firstName: '', lastName: '', email: '' };
    let isValid = true;

    if (!firstName) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!lastName) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      // Handle form submission
      console.log('Form is valid');
      showToast('save', 'Your changes have been successfully changed!');
    } else {
      console.log('Form is invalid');
    }
  };
  
  return (
    <div className=''>
      <Navbar />
      <main className="flex min-h-fit flex-col items-center justify-between px-6 pb-6">
        <div className="flex w-full gap-4 text-gray-800">
          <div className="hidden lg:block flex-1 bg-white py-[101.5px] px-[70.5px] relative rounded-lg">
            <div className="relative w-full h-full">
              <Image 
                src="/images/preview-section2.png" 
                alt="preview section"
                layout="fill" 
                objectFit="contain" 
              />
            </div>
          </div>
          <div className="flex-1 lg:flex-[2] bg-white rounded-lg">
            <div className="p-10">
              <h2 className="text-[32px] font-bold">Profile Details</h2>
              <p className="my-4 text-gray-500 text-[16px]">Add your details to create a personal touch to your profile.</p>
              
              <div className="w-full flex justify-start flex-col gap-5">
                <div className="bg-[#FAFAFA] rounded-lg flex justify-between items-start gap-4 md:gap-0 flex-col md:flex-row md:items-center p-[20px] text-center text-[#737373] relative">
                  <p className="text-base">Profile picture</p>
                  <div className='flex justify-start md:justify-center items-start gap-4 md:gap-0 flex-col md:flex-row md:items-center'>
                    <button className="relative w-[193px] h-[193px] md:w-[249.53px] md:h-[160px] flex justify-start hover:cursor-pointer">
                      <Image
                        src="/images/Frame 14.png" 
                        alt="preview section"
                        layout="fill" 
                        objectFit="contain" 
                      />
                    </button>
                    <p className="text-[12px] text-start">Image must be below 1024x1024px. <br /> Use PNG or JPG format.</p>
                  </div>
                </div>
                <div className="bg-[#FAFAFA] rounded-lg flex justify-between items-center p-[20px] text-base text-center text-[#737373] relative">
                  <form className='w-full flex justify-between items-center flex-col gap-[12px]'>
                    <div className="inputContainer w-full flex justify-between items-start flex-col md:flex-row md:items-center">
                      <label htmlFor="firstName" className='flex-1 text-start'>First name*</label>
                      <div className={`flex-[1.5] w-full flex items-center border bg-white rounded-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus-within:border-[#633CFF] focus-within:ring-1 focus-within:ring-[#633CFF] focus-within:shadow-[0_0_10px_0_rgba(99,60,255,0.5),0_0_20px_5px_rgba(99,60,255,0.05)]`}>
                        <input
                          className="w-full py-[12px] px-4 border-none rounded-lg outline-0 text-base text-gray-700 leading-tight"
                          id="firstName"
                          type="text"
                          placeholder='eg. John' 
                          value={firstName}
                          onChange={handleInputChange}
                        />
                        {errors.firstName && <span className="text-xs text-red-500 w-[180px] flex justify-end">{errors.firstName}</span>}
                      </div>
                    </div>
                    <div className="inputContainer w-full flex justify-between items-start flex-col md:flex-row md:items-center">
                      <label htmlFor="lastName" className='flex-1 text-start'>Last name*</label>
                      <div className={`flex-[1.5] w-full flex items-center border bg-white rounded-lg ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus-within:border-[#633CFF] focus-within:ring-1 focus-within:ring-[#633CFF] focus-within:shadow-[0_0_10px_0_rgba(99,60,255,0.5),0_0_20px_5px_rgba(99,60,255,0.05)]`}>
                        <input
                          className="w-full py-[12px] px-4 border-none rounded-lg outline-0 text-base text-gray-700 leading-tight"
                          id="lastName"
                          type="text"
                          placeholder='eg. Appleseed' 
                          value={lastName}
                          onChange={handleInputChange}
                        />
                        {errors.lastName && <span className="text-xs text-red-500 w-[180px] flex justify-end">{errors.lastName}</span>}
                      </div>
                    </div>
                    <div className="inputContainer w-full flex justify-between items-start flex-col md:flex-row md:items-center">
                      <label htmlFor="email" className='flex-1 text-start'>Email</label>
                      <div className={`flex-[1.5] w-full flex items-center border bg-white rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} focus-within:border-[#633CFF] focus-within:ring-1 focus-within:ring-[#633CFF] focus-within:shadow-[0_0_10px_0_rgba(99,60,255,0.5),0_0_20px_5px_rgba(99,60,255,0.05)]`}>
                        <input
                          className="w-full py-[12px] px-4 border-none outline-0 rounded-lg text-base text-gray-700 leading-tight"
                          id="email"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="eg. email@example.com"
                        />
                        {errors.email && <span className="text-xs text-red-500 w-[140px] flex justify-end">{errors.email}</span>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex justify-end align-items py-8 px-[40px]">
              <button
                className="bg-[#633CFF] hover:bg-[#BEADFF] text-white font-bold py-[11px] px-[27px] rounded-lg focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Links;
