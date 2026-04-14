import React, { useEffect, useState } from 'react';

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
   
    const fetchData = async () => {
      const res = await fetch('/data.json');
      console.log(res);
      const data = await res.json();
      console.log(data);
      setFriends(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
   
      {friends,loading }
   
  );
};

export default useFriends;