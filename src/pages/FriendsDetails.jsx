import React from 'react';
import { useParams } from 'react-router';
import useFriends from '../hooks/useFriends';

const FriendsDetails = () => {
   const { id } = useParams();
  console.log(id);
  const { friends, loading } = useFriends();
  const expectedFriend = friends.find(friend => String(friend.id) === id);
  console.log(friends, loading,expectedFriend);
 
  if (loading) {
    return <h2>Loading---</h2>
  }
  if (!expectedFriend) {
    return <h2 className="text-center mt-10 text-2xl text-red-500">Friend Not Found!</h2>;
  }
   const { picture, name, status, next_due_date, goal, days_since_contact, bio } = expectedFriend;
  return (
   
   <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 bg-gray-50 min-h-screen">
      
      {/* --- Left Sidebar Section (Takes 3 columns) --- */}
      <div className="md:col-span-3 space-y-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
          <img src={picture} alt={name} className="w-24 h-24 rounded-full mx-auto object-cover mb-4" />
          <h2 className="text-xl font-bold">{name}</h2>
          <div className="flex flex-col items-center gap-2 mt-2">
             <span className={`px-3 py-1 rounded-full text-xs text-white ${status === 'overdue' ? 'bg-red-500' : 'bg-green-600'}`}>{status}</span>
             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">FAMILY</span>
          </div>
          <p className="text-gray-500 italic mt-4 text-sm">"{bio}"</p>
          <p className="text-gray-400 text-xs mt-2">Preferred: email</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button className="w-full py-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50">
            <span>⏰</span> Snooze 2 Weeks
          </button>
          <button className="w-full py-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50">
            <span>📦</span> Archive
          </button>
          <button className="w-full py-3 bg-white rounded-xl shadow-sm border border-gray-100 text-red-500 flex items-center justify-center gap-2 hover:bg-red-50">
            <span>🗑️</span> Delete
          </button>
        </div>
      </div>

      {/* --- Right Main Content (Takes 9 columns) --- */}
      <div className="md:col-span-9 space-y-6">
        
        {/* Top Stats: 3 columns grid within main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
            <p className="text-3xl font-bold text-gray-800">{days_since_contact}</p>
            <p className="text-gray-400 text-sm">Days Since Contact</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
            <p className="text-3xl font-bold text-gray-800">{goal}</p>
            <p className="text-gray-400 text-sm">Goal (Days)</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100 text-green-800">
            <p className="text-3xl font-bold">{next_due_date}</p>
            <p className="text-gray-400 text-sm">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-gray-800">Relationship Goal</h3>
            <p className="text-gray-500">Connect every <strong>{goal} days</strong></p>
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">Edit</button>
        </div>

        {/* Quick Check-In: 3 columns grid */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-green-900 mb-4">Quick Check-In</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-50 rounded-xl hover:bg-green-50 cursor-pointer">📞<br/>Call</div>
            <div className="p-4 bg-gray-50 rounded-xl hover:bg-green-50 cursor-pointer">💬<br/>Text</div>
            <div className="p-4 bg-gray-50 rounded-xl hover:bg-green-50 cursor-pointer">📹<br/>Video</div>
          </div>
        </div>

        {/* Recent Interactions List */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-green-900">Recent Interactions</h3>
            <button className="text-xs text-gray-500 border px-2 py-1 rounded">Full History</button>
          </div>
          <div className="space-y-4">
            {/* Example row */}
            <div className="flex justify-between items-center border-b pb-4">
              <div className="flex gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold text-sm text-gray-800">Text</p>
                  <p className="text-xs text-gray-400">Asked for career advice</p>
                </div>
              </div>
              <p className="text-xs text-gray-400">Jan 28, 2026</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendsDetails;