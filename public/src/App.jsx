import React from "react";

// home component
import Home from './Home.jsx'

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const App = () => {
  return <>
    <ToastContainer
    />
    <Home />
    {/* <RouterProvider router={router} /> */}
  </>
};

export default App;
