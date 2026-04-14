import React, { useContext } from 'react';
import { TimelineTextContext } from '../context/timelineTextContext';

const TimeLine = () => {
  const {timelineText,setTimelineText} = useContext(TimelineTextContext);
  console.log(timelineText,setTimelineText);
  return (
    <div>
      {
        timelineText.map((text, index) => {
          return <div></div>
        })
     }
    </div>
  );
};

export default TimeLine;