import React, { createContext, useState } from 'react';

export const TimelineTextContext=createContext()
const TimelineTextProvider = ({ children }) => {
      const [timelineText, setTimelineText] = useState([]);
  const data = {
    timelineText,
    setTimelineText
  }
  return <TimelineTextContext.Provider value={data }>{ children}</TimelineTextContext.Provider>
};

export default TimelineTextProvider;