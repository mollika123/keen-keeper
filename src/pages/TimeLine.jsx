import React, { useContext, useState } from 'react';
import { TimelineTextContext } from '../context/timelineTextContext';
import { TbPhoneCall } from 'react-icons/tb';
import { IoIosText } from 'react-icons/io';
import { HiMiniVideoCamera } from 'react-icons/hi2';

const TimeLine = () => {
  const { timelineText, setTimelineText } = useContext(TimelineTextContext);
     const [search, setSearch] = useState('');
  console.log(timelineText, setTimelineText);
      const filteredCart = timelineText.filter((item) =>
    item.type.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-5xl font-bold'>Timeline</h1>

           <input
                type="text"
                placeholder="Filter timeline..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[347px] border rounded-lg px-4 py-2 mb-6 outline-none focus:ring-2 focus:ring-green-300"
            />
      {timelineText.length===0 ? (<p className='font-bold text-center text-5xl py-12'>No Message Yet</p>):
       ( timelineText.map((text, index) => {
          return <div key={index} className='border border-dashed p-6 my-4'>
            {
              text.interactionType === 'call' && (
                <div className='flex justify-start items-center gap-4'>
                  <div><TbPhoneCall className='text-5xl text-gray-600'></TbPhoneCall></div>
                  <div><p className='text-[#64748B]'><span className='text-2xl text-[#244D3F] font-semibold'>Call </span>with {text.name} </p>
                    <p className='text-[#64748B]'>  {new Date(text.date).toLocaleString('en-us', {
                      month: 'long',
                      day: 'numeric',
                      year:'numeric'
                  })}</p></div>
                </div>
              )
           }
            {
              text.interactionType === 'text' && (
                <div className='flex justify-start items-center gap-4'>
                  <div><IoIosText className='text-5xl text-gray-600'></IoIosText></div>
                  <div><p className='text-[#64748B]'><span className='text-2xl text-[#244D3F] font-semibold'>Text </span>with {text.name} </p>
                    <p className='text-[#64748B]'>  {new Date(text.date).toLocaleString('en-us', {
                      month: 'long',
                      day: 'numeric',
                      year:'numeric'
                  })}</p></div>
                </div>
              )
           }
            {
              text.interactionType === 'video' && (
                <div className='flex justify-start items-center gap-4'>
                  <div><HiMiniVideoCamera className='text-5xl text-gray-600'></HiMiniVideoCamera></div>
                  <div><p ><span  className='text-2xl text-[#244D3F] font-semibold'>Video  </span>with {text.name} </p>
                    <p className='text-[#64748B]'>  {new Date(text.date).toLocaleString('en-us', {
                      month: 'long',
                      day: 'numeric',
                      year:'numeric'
                  })}</p></div>
                </div>
              )
           }

          </div>
        }))
     }
    </div>
  );
};

export default TimeLine;