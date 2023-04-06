import { RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Component/Main/Main";
import { router } from "./Rotues/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;
