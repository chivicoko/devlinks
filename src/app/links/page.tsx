"use client";

import React, { useState, useEffect, useRef } from 'react';
import Select, { components } from 'react-select';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MediationIcon from '@mui/icons-material/Mediation';
import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';

interface Link {
  platform: string;
  url: string;
}

const platformOptions = [
  { value: 'GitHub', label: 'GitHub', icon: <GitHubIcon /> },
  { value: 'YouTube', label: 'YouTube', icon: <YouTubeIcon /> },
  { value: 'Facebook', label: 'Facebook', icon: <FacebookIcon /> },
  { value: 'Twitter', label: 'Twitter', icon: <XIcon /> },
  { value: 'LinkedIn', label: 'LinkedIn', icon: <LinkedInIcon /> },
  { value: 'Instagram', label: 'Instagram', icon: <InstagramIcon /> },
  { value: 'Other', label: 'Other', icon: <MediationIcon /> },
];

const formatOptionLabel = ({ value, label, icon }: any) => (
  <div style={{ display: 'flex', alignItems: 'center', color: '#333333' }}>
    {icon}
    <span style={{ marginLeft: 10 }}>{label}</span>
  </div>
);

const DropdownIndicator = (props: any) => (
  <components.DropdownIndicator {...props}>
    <div
      style={{
        transform: props.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '16px',
        height: '16px',
      }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  </components.DropdownIndicator>
);

const CustomOption = (props: any) => (
  <components.Option {...props}>
    <div style={{ display: 'flex', alignItems: 'center', padding: '8px', paddingTop: '0' }}>
      {props.data.icon}
      <span style={{ marginLeft: 10 }}>{props.data.label}</span>
    </div>
    <hr style={{ border: 'none', borderBottom: '1px solid #eee', margin: '0' }} />
  </components.Option>
);

const Links: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([{ platform: platformOptions[0].value, url: '' }]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [menuPortalTarget, setMenuPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // This effect runs only on the client
    setMenuPortalTarget(document.body);
  }, []);

  const addLinkSection = () => {
    setLinks([...links, { platform: '', url: '' }]);
  };

  const removeLinkSection = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    setLinks(links.map((link, i) => (i === index ? { ...link, [field]: value } : link)));
  };

  const validateInputs = () => {
    let valid = true;
    const newErrors: { [key: string]: string } = {};

    links.forEach((link, index) => {
      if (!link.platform) {
        valid = false;
        newErrors[`platform${index}`] = 'Platform is required';
      }
      if (!link.url) {
        valid = false;
        newErrors[`url${index}`] = 'URL is required';
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSave = () => {
    if (validateInputs()) {
      console.log('Links:', links);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="flex min-h-fit flex-col items-center justify-between px-6 pb-6">
        <div className="flex flex-wrap w-full gap-4 text-gray-800">
          <div className="hidden lg:block flex-1 bg-white py-[101.5px] px-[70.5px] relative rounded-lg">
            <div className="relative w-full h-full">
              <Image 
                src="/images/preview-section.png" 
                alt="preview section"
                layout="fill" 
                objectFit="contain" 
              />
            </div>
          </div>
          <div className="flex-1 lg:flex-[2] bg-white rounded-lg">
            <div className="p-10 max-h-screen overflow-y-auto hide-scrollbar">
              <h2 className="text-[32px] font-bold">Customize your links</h2>
              <p className="my-4 text-gray-500 text-[16px]">Add/edit/remove links below and then share all your profiles with the world!</p>
              <button 
                onClick={addLinkSection}
                className='mt-6 mb-6 bg-white w-full font-bold rounded-lg text-[#633CFF] py-[11px] px-[27px] border border-[#633CFF] hover:bg-[#EFEBFF] hover:cursor-pointer'
              >
                + Add new link
              </button>
              
              <div className='flex flex-col gap-5 min-h-[70vh]'>
                {links.length === 0 && (
                  <div className="getStarted bg-[#FAFAFA] px-[20px] py-[62.5px] rounded-[12px]">
                    <div className="flex flex-col items-center px-[100px] text-center relative">
                      <div className="items-center relative w-[249.53px] h-[160px]">
                        <Image
                          src="/images/Group 273.png" 
                          alt="preview section"
                          layout="fill" 
                          objectFit="contain" 
                        />
                      </div>
                      <h2 className="text-[32px] font-bold mt-8">Let’s get you started</h2>
                      <p className="my-4 text-gray-500 text-base p-2">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                    </div>
                  </div>
                )}

                {links.map((link, index) => (
                  <div key={index} className="addLinkSection bg-[#FAFAFA] p-[20px] rounded-[12px]">
                    <div className='topHead text-base text-gray-500 flex justify-between items-center mb-2'>
                      <p>= <span className='text-gray-600 font-semibold'>Link #{index + 1}</span></p>
                      <button onClick={() => removeLinkSection(index)}>Remove</button>
                    </div>
                    <div className='createLink hide-scrollbar'>
                      <label htmlFor={`platform${index}`} className={`text-[12px] font-semibold text-gray-500`}>Platform</label>
                      <div className={`bg-white mb-4 px-1 flex items-center rounded-lg ring-1 ring-gray-300 focus-within:border-[#633CFF] focus-within:ring-[#633CFF] focus-within:shadow-[0_0_10px_0_rgba(99,60,255,0.5),0_0_20px_5px_rgba(99,60,255,0.05)]`}>
                        <Select
                          className="w-full"
                          id={`platform${index}`}
                          value={platformOptions.find(option => option.value === link.platform) || platformOptions[0]}
                          onChange={(selectedOption: any) => handleInputChange(index, 'platform', selectedOption.value)}
                          options={platformOptions}
                          formatOptionLabel={formatOptionLabel}
                          components={{ DropdownIndicator, IndicatorSeparator: () => null, Option: CustomOption }}
                          styles={{
                            control: (base) => ({
                              ...base,
                              border: 'none',
                              boxShadow: 'none',
                              paddingInline: '0',
                              marginTop: '4px',
                              '&:hover': {
                                border: 'none',
                              },
                            }),
                            menuPortal: (base) => ({
                              ...base,
                            }),
                            menu: (base) => ({
                              ...base,
                              overflowY: 'hidden', // Hide the scrollbar
                              '&::-webkit-scrollbar': {
                                display: 'none', // Hide scrollbar for Webkit browsers
                              },
                            }),
                            option: (base, { isFocused }) => ({
                              ...base,
                              backgroundColor: isFocused ? '#EFEBFF' : 'white',
                              color: isFocused ? '#633CFF' : '#333',
                            }),
                            singleValue: (base) => ({
                              ...base,
                              display: 'flex',
                              alignItems: 'center',
                            }),
                            input: (base) => ({
                              ...base,
                              margin: 0,
                              padding: 0,
                            }),
                          }}
                          menuPortalTarget={menuPortalTarget} // Use state variable
                        />
                        {errors[`platform${index}`] && <span className="text-xs w-[150px] text-red-500 ml-2">{errors[`platform${index}`]}</span>}
                      </div>
                      
                      <label htmlFor={`url${index}`} className={`text-[12px] font-semibold text-gray-500`}>Link</label>
                      <div className={`bg-white mb-4 p-3 flex items-center border rounded-lg border-gray-300 focus-within:border-[#633CFF] focus-within:ring-1 focus-within:ring-[#633CFF] focus-within:shadow-[0_0_10px_0_rgba(99,60,255,0.5),0_0_20px_5px_rgba(99,60,255,0.05)]`}>
                        <span className="relative w-4 h-5 flex-shrink-0">
                          <Image src="/images/ph_link-bold2.png" alt="Email Icon" layout="fill" objectFit="contain" />
                        </span>
                        <input
                          className="w-full border-none pl-3 text-base text-[#333333] leading-tight focus:outline-none focus:ring-0"
                          id={`url${index}`}
                          type="text"
                          value={link.url}
                          onChange={(e) => handleInputChange(index, 'url', e.target.value)}
                          placeholder="e.g. https://www.github.com/johnappleseed"
                        />
                        {errors[`url${index}`] && <span className="text-xs w-[120px] text-red-500 ml-2">{errors[`url${index}`]}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className="flex justify-end items-center py-8 px-[40px]">
              <button
                onClick={handleSave}
                className="bg-[#633CFF] hover:bg-[#BEADFF] text-white font-bold py-[11px] px-[27px] rounded-lg focus:outline-none focus:shadow-outline"
                type="button"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Links;
