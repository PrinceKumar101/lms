import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { counterAtom } from "../store/atoms/counter";

const Increase = () => {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <button
      onClick={() => {
        setCount((currentValue) => currentValue + 1);
      }}  
    >
      Increase
    </button>
  ) ; 
};

const Decrease = () => {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <button
      onClick={() => {
        setCount((currentValue) => currentValue - 1);
      }}
    >
      Decrease
    </button>
  );
};

const DisplayCount = () => {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
};

const Counter = () => {
  return (
      <div className="text-4xl flex flex-col gap-5">
        <Increase />
        <Decrease />
        <DisplayCount />
      </div>
  );
};

export default Counter;
