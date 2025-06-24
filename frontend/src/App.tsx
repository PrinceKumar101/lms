import { RecoilRoot } from "recoil";

import AtomFamilyUsage from "./pages/AtomFamily";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <div className="bg-black text-white h-screen flex flex-col gap-2 justify-center items-center">
          <AtomFamilyUsage />
        </div>
      </RecoilRoot>
    </>
  );
};

export default App;
