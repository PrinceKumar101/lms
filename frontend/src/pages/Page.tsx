import { useState } from "react";


export const  useCounter = ()=>{
  const [Count, setCount] = useState(0);

  const setcount = ()=>{
    setCount(currentValue=>currentValue+1);
  }
  return {
    count:Count,
    setcount:setcount
  }
}

const Page = () => {
  return <>
  <div className="flex flex-col gap-5 justify-center items-center mt-10 text-xl ">
    <Counter/>
  <Counter/>
  <Counter/>
  </div>
  </>

};
export default Page;

const Counter  = ()=>{
  const {count,setcount} = useCounter();
  return <div>
    <button onClick={setcount}>Counter {count}</button>
  </div>
}

