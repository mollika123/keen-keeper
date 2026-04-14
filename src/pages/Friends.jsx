import React from 'react';
import useFriends from '../hooks/useFriends';
import { RotatingLines } from 'react-loader-spinner';
import FriendsCard from './FriendsCard';

const Friends = () => {
  const {friends,loading } = useFriends();
  return (
    <div className='container mx-auto py-20'>
      <h1 className='text-5xl font-bold my-6'>Your Friends</h1>
      {
        loading ? (<div className='flex justify-center items-center'><RotatingLines></RotatingLines></div>) : (<div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3'>{friends.map((friend,index)=><FriendsCard key={index}friend={friend}></FriendsCard>) }</div>)
     }
    </div>
  );
};

export default Friends;