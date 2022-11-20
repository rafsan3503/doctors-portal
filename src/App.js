import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/router";
import "react-day-picker/dist/style.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
