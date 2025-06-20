import { useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../store/atoms/counter";
import { isEvenCounterSelector } from "../store/selectors/counter";

const Button = () => {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
};
const Counter = () => {
  const count = useRecoilValue(counterAtom);
  return (
    <>
      <div>{count}</div>
    </>
  );
};
const IsEven = () => {
  const isevenSelector = useRecoilValue(isEvenCounterSelector);

  return (
    <>
      <span>{isevenSelector ? " Even" : "Odd"}</span>
    </>
  );
};
const SelectorsCount = () => {
  return (
    <>
      <Counter />
      <div>
        The Number provided is <IsEven />
      </div>
      <Button />
    </>
  );
};
export default SelectorsCount;
