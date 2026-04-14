import React from 'react';
import { IoIosAdd } from 'react-icons/io';

const Banner = () => {
  return (
    <div className='container mx-auto py-20'>
      <div className='text-center space-y-7'>
        <h1 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
        <p className='text-xl text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.</p>
        <button className='bg-[#244D3F] btn text-white py-6 px-5 font-bold '><IoIosAdd className='text-white ' />Add a Friend</button>
    </div>
    </div>
  );
};

export default Banner;