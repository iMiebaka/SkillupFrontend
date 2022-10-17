import { useEffect, useState } from "react";
/**
 * Cyles in React
 * Mount, Update, Unmount
 *
 */

const Cycle = () => {
  const [data, setData] = useState("First Data");
  const [data2, setData2] = useState("Second Data");
  useEffect(() => {
    console.log("We are live");
   
    return () => {
      console.log("Time to leave");
    };
  },[]);
  return (
    <div>
      Cycle
      <p>{data}</p>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <p>{data2}</p>
      <input type="text" onChange={(e) => setData2(e.target.value)} />
    </div>
  );
};

export default Cycle;
