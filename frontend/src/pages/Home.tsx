import { Button } from "@/components/ui/button";
import { useRef, useState, type Ref, type RefObject } from "react";

const Home = () => {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  return (
    <>
      <div>
        <h1 className=" text-6xl font-bold text-sky-500 text-center p-5 hover:text-sky-600 hover:scale-105 ">
          <span>Home</span>
        </h1>
        <div className=" flex flex-row space-x-5 justify-center">
          {inputRefs.map((ref, index) => {
            return (
              <Box
                key={index}
                inputRef={ref}
                index={index}
                inputRefs={inputRefs}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Button className="bg-(--background)">Hey bro</Button>
      </div>
    </>
  );
};

const Box = ({
  inputRef,
  index,
  inputRefs,
}: {
  inputRefs: RefObject<HTMLInputElement>[];
  index: number;
  inputRef: any;
}) => {
  const [disablekeychange, setdisablekeychange] = useState(true);
  const handleKeyChange = (e:KeyboardEvent) => {
    const value = inputRef.current.value;
    console.log(value);
    if( value.length > 1 ){
        inputRef.current.value = (value)%10;
        return;
    }
    if (
      value.length > 0 &&
      index < inputRefs.length - 1 &&
      e.key != "Backspace"
    ) {
      inputRefs[index + 1].current.focus();
      return;
    }
    if (e.key == "Backspace" && (disablekeychange) && value.length == 1) {
      inputRef.current.value = "";
      return;
    } else if (e.key == "Backspace" && (disablekeychange) && value.length == 0 && index > 0) {
      inputRefs[index - 1].current.focus();
      return;
    }
  };
  const handleClick = () => {
    inputRef.current.focus(); 
    setdisablekeychange(false);
    
  };
  return (
    <div className=" size-10 bg-slate-200 rounded-md shadow shadow-slate-500 hover:scale-105 overflow-hidden ">
      <input
        ref={inputRef}
        type="number"
        name={`number_box${index}`}
        id={`number_box${index}`}
        className="p-2 inset-0 bg-amber-50"
        onKeyUp={handleKeyChange}
        onClick={handleClick}
      />
    </div>
  );
};
export default Home;
