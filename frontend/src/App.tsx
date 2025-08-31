import { RouterProvider } from "react-router-dom";
import BrowserRouter from "./BrowserRouter";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <RouterProvider router={BrowserRouter} />
      </RecoilRoot>
    </>
  );
};

export default App;
