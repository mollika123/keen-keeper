import React from 'react';
import { Link } from 'react-router';
import Friends from './Friends';

const FriendsCard = ({ friend }) => {
  // console.log(friend);
  const { name, picture, days_since_contact, tags, status } = friend;
  return (
   <Link to={`/friends/${friend.id}`} className="card bg-base-100  shadow-sm  ">
  <figure className="px-10 pt-10 ">
    <img
      src={picture}
      alt={name}
      className="rounded-full object-cover w-24 h-24" />
  </figure>
  <div className="card-body items-center text-center space-y-3">
        <h2 className="card-title">{ name}</h2>
        <p className='text-[#64748B]'>{days_since_contact}d ago</p>
        
        <p>{tags.map((tag,index) => <span key={index } className='rounded-full gap-6 mr-2 text-[#244D3F] bg-[#CBFADB] py-2 px-2.5 font-semibold'>{tag }</span>)}</p>
    <div className='flex items-center'>
          <span className={`px-4 py-2.5 text-white rounded-full ${status === 'overdue' ? 'bg-[#EF4444]' : status === 'almost due' ? 'bg-[#EFAD44]' : status==='on-track' ? 'bg-[#244D3F]':'bg-gray-400'}`}>{status }</span>
    </div>
  </div>
</Link>
  );
};

export default FriendsCard;