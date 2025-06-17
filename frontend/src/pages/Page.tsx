import React from "react";
import { useState } from "react";

const Page = () => {
  const [toggle, settoggle] = useState(true);
  return (
    <>
      <div>
        <Card1 arg1="Sup bro"/>
      </div>
      <br />

      <div>
        <Card1/>
      </div>

      <div>
        {toggle && <div>Hello kid</div>}
      </div>
      <div>
        <button onClick={()=>{settoggle(!toggle)}} className="bg-green-500 text-white rounded-2xl p-2">Toggle button</button>
      </div>
    </>
  );
};

const Card1 = (props) => {
  return (
    <div>
      <div>
        <h1>Hey there</h1>
      </div>
      {props.arg1 && <div>{props.arg1}...</div>}
    </div>
  );
};
export default Page;
