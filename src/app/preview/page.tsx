import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// console.log(process.env.MONGO_URI);

const Preview = () => {
  return (
    <main className='relative min-h-screen'>
      <div className='md:bg-[#633CFF] p-4 md:p-6 rounded-b-[32px] h-[357px] flex items-start justify-center'>
        <div className='flex items-center justify-between md:p-4 bg-white rounded-lg md:shadow-md w-full'>
          <Link href='/editor' className='bg-white rounded-lg text-[#633CFF] py-[11px] px-[27px] border border-[#633CFF] hover:bg-[#EFEBFF] hover:cursor-pointer'>
            Back to Editor
          </Link>
          <Link href='/' className='bg-[#633CFF] rounded-lg text-white py-[11px] px-[27px] border border-[#633CFF]'>
            Share Link
          </Link>
        </div>
      </div>

      <div className="card pb-[207px] absolute left-1/2 transform -translate-x-1/2 top-[100px] md:top-[200px] text-gray-700 w-[90%] max-w-[350px]">
        <div className="md:bg-white relative md:rounded-[24px] py-[48px] px-[56px] text-center md:shadow-lg">
          <div className="relative w-[104px] h-[104px] rounded-full overflow-hidden mx-auto">
            <Image 
              src="/images/Ellipse 3.png" 
              alt="preview section"
              layout="fill" 
              objectFit="contain" 
            />
          </div>
          <h2 className='text-[32px] pt-4 pb-1 font-bold'>Ben Wright</h2>
          <p className='text-base py-2 pb-16'>ben@example.com</p>
          <div className='flex flex-col gap-5 w-full'>
            <button className="linkItems w-full bg-[#1A1A1A] text-white flex justify-between items-center gap-10 rounded-lg p-4">
              <div className='flex justify-start items-center gap-3'>
                <div className="relative w-[16px] h-[16px] rounded-full overflow-hidden">
                  <Image 
                    src="/images/teenyicons_github-solid.png" 
                    alt="preview section"
                    layout="fill" 
                    objectFit="contain" 
                  />
                </div>
                <p className='text-base'>GitHub</p>
              </div>
              <div className="relative w-[12px] h-[12px] rounded-full overflow-hidden">
                <Image 
                  src="/images/mdi_arrow-right.png" 
                  alt="preview section"
                  layout="fill" 
                  objectFit="contain" 
                />
              </div>
            </button>
            <button className="linkItems w-full bg-[#EE3939] text-white flex justify-between items-center gap-10 rounded-lg p-4">
              <div className='flex justify-start items-center gap-3'>
                <div className="relative w-[16px] h-[16px] rounded-full overflow-hidden">
                  <Image 
                    src="/images/ri_youtube-fill.png" 
                    alt="preview section"
                    layout="fill" 
                    objectFit="contain" 
                  />
                </div>
                <p className='text-base'>YouTube</p>
              </div>
              <div className="relative w-[12px] h-[12px] rounded-full overflow-hidden">
                <Image 
                  src="/images/mdi_arrow-right.png" 
                  alt="preview section"
                  layout="fill" 
                  objectFit="contain" 
                />
              </div>
            </button>
            <button className="linkItems w-full bg-[#2D68FF] text-white flex justify-between items-center gap-10 rounded-lg p-4">
              <div className='flex justify-start items-center gap-3'>
                <div className="relative w-[16px] h-[16px] rounded-full overflow-hidden">
                  <Image 
                    src="/images/mdi_linkedin.png" 
                    alt="preview section"
                    layout="fill" 
                    objectFit="contain" 
                  />
                </div>
                <p className='text-base'>LinkedIn</p>
              </div>
              <div className="relative w-[12px] h-[12px] rounded-full overflow-hidden">
                <Image 
                  src="/images/mdi_arrow-right.png" 
                  alt="preview section"
                  layout="fill" 
                  objectFit="contain" 
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Preview;
