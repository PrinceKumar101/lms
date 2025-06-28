import { RecoilRoot } from "recoil";

import CustomUI from "./pages/CustomUi";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <div className="bg-black text-white h-screen flex flex-col gap-2 justify-center items-center">
          <CustomUI/>
        </div>
      </RecoilRoot>
    </>
  );
};

export default App;
