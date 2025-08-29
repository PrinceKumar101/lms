import { useEffect, useMemo, useState } from "react";

import {
  FixedSizeList as List
} from "react-window";
const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="relative grid place-items-center size-20 ">
      {/* Background circle */}
      <div className="absolute inset-0 rounded-full border-8 border-fuck/20"></div>

      {/* Progress circle */}
      <div
        className={`absolute inset-0 rounded-full border-8 border-green-500 mask-conic-from-${progress}% mask-conic-to-${progress}%`}
      ></div>

      {/* Percentage text */}
      <span className="text-lg font-bold text-fuck">{progress}%</span>
    </div>
  );
};

const Contact = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((c) => {
        if (c >= 100) {
          clearInterval(timer);
          return c;
        } else {
          return c + 10;
        }
      });
    }, 500);
  }, []);

  return (
    <div className="bg-(--fuck)">
      <div className="text-xl font-bold">
        <p className=" text-fuck">Contact</p>
      </div>

      <div className="card-new">
        <h1>New Card</h1>

        <div className="flex flex-row gap-4 items-center">
          <ProgressBar progress={progress} />

          <p className="text-sm font-medium"> Almost there</p>
        </div>
      </div>
      <div className="card-new hover:scale-none w-80 h-96 mt-2 overflow-hidden ">
        <h2 className="text-lg font-bold">Card Title</h2>
        <p className="text-sm">Card content goes here.</p>
        <WindowTest />
      </div>
    </div>
  );
};
export default Contact;

const WindowTest = () => {
  const arr = useMemo(() => new Array(9000).fill(0).map((_, index) => index + 1), []);

  return <List height={500} itemCount={arr.length} itemSize={35} width="100%" itemData={arr}>{Row}</List>;
};

const Row = ({ index, style, data }) => {
  const val = data[index];
    return (
      <div
        style={style}
        className={`${index % 2 == 0 ? "bg-gray-100" : "bg-white"}`}
      >
        {val}
      </div>
    );
  };