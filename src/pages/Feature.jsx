import React from 'react';

const Feature = () => {
  return (
    <div className='container mx-auto py-8'>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 card '>
        <div className='bg-white p-8 text-center rounded-md shadow-md'><h2 className=' text-3xl font-bold'>10</h2>
        <p className='text-[#64748B]     text-2xl'>Total Friends</p></div>
        <div className='bg-white p-8 text-center rounded-md shadow-md'><h2 className=' text-3xl font-bold'>3</h2>
        <p className='text-[#64748B]     text-2xl'>On Track</p></div>
        <div className='bg-white p-8 text-center rounded-md shadow-md'><h2 className=' text-3xl font-bold'>6</h2>
        <p className='text-[#64748B]     text-2xl'>Need Attention</p></div>
        <div className='bg-white p-8 text-center rounded-md shadow-md'><h2 className=' text-3xl font-bold'>12</h2>
        <p className='text-[#64748B]     text-2xl'>Interactions This Month</p></div>
        
     </div>
    </div>
  );
};

export default Feature;