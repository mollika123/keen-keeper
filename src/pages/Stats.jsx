import React, { useContext } from 'react';
// import { ... } gulo thikmoto kora ache kina check korun
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TimelineTextContext } from '../context/timelineTextContext';

const Stats = () => {
  const { timelineText } = useContext(TimelineTextContext);

  // ১. কাউন্ট বের করা (নিশ্চিত করুন timelineText-e data ache)
  const callCount = timelineText.filter(item => item.interactionType === 'call').length;
  const textCount = timelineText.filter(item => item.interactionType === 'text').length;
  const videoCount = timelineText.filter(item => item.interactionType === 'video').length;

  // ২. চার্টের ডাটা (value jodi 0 hoy tobe chart dekhabe na)
  const data = [
    { name: 'Calls', value: callCount },
    { name: 'Texts', value: textCount },
    { name: 'Videos', value: videoCount },
  ].filter(item => item.value > 0);

  // কালার ডিফাইন করা
  const COLORS = ['#3b82f6', '#22c55e', '#a855f7'];

  return (
    <div className='container mx-auto py-10 px-4'>
      <h1 className='text-5xl font-bold py-8 text-center text-[#244D3F]'>Friendship Analytics</h1>

      {timelineText.length === 0 ? (
        <p className="text-center text-gray-400 text-2xl py-20">No data available to display chart.</p>
      ) : (
        /* height: 400px deya khub-i joruri nahole chart ashbe na */
        <div className='flex justify-center' style={{ width: '100%', height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%" // Center X
                cy="50%" // Center Y
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Stats;