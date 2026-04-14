import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Friends from './Friends';

const Home = () => {
  return (
    <div className='bg-base-200'>
      <Banner></Banner>
      <Feature></Feature>
      <Friends></Friends>
    </div>
  );
};

export default Home;