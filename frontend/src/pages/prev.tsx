import { useState } from "react";
import { usePrev } from "../hooks/usePrev";
const Prev = () => {
  const [count, setcount] = useState(0);

  return (
    <>
        <div className="bg-black/30 text-4xl flex flex-col justify-center items-center">
            <button onClick={()=>{setcount(c=>c+1)}}>Click me</button>
        <p>{count}</p>
        <p>Previous value of state was <span>{usePrev(count)}</span></p>
        </div>
    </>
  )
};
export default Prev;


