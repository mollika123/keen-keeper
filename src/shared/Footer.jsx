import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SlSocialInstagram } from 'react-icons/sl';

const Footer = () => {
  return (
    <footer className=" bg-[#244D3F] text-primary-content py-20 p-10">
  <aside className='text-center space-y-6'>
    
    <h1 className="font-bold text-5xl text-white">
   KeenKeeper
    </h1>
    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
  </aside>
      <nav className='text-center'>
        <h1 className='text-2xl my-4'>Social Links</h1>
        <div className="flex gap-5 justify-center items-center mb-8">
                            <div className="width-[30px] height-[30px] bg-white p-4 text-black flex items-center justify-center rounded-full">
                              <SlSocialInstagram />
                            </div>
                            
                            
                           

                            <div className="width-[30px] height-[30px] bg-white text-black flex items-center p-4 justify-center rounded-full">
                              <FaFacebookSquare />

                            </div>
                            
                            <div className="width-[30px] height-[30px] bg-white text-black flex items-center justify-center p-4 rounded-full">
                            <FaXTwitter />

                            </div>
        </div>
            <hr className='my-8 border-gray-50' />
      <div className='flex sm:flex-col lg:justify-between lg:flex-row text-gray-200 space-y-4'>
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className='flex gap-4 sm:justify-center'>
          <p>Privacy Policy              </p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
      </nav>
  
</footer>
  );
};

export default Footer;