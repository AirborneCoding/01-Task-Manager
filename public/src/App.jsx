// import React from "react";

// // home component
// import Home from './Home.jsx'
// import RTKHome from "./RTKHome.jsx";

// // toastify
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const App = () => {
//   return <>
//     <ToastContainer/>
//     {/* <Home /> */}
//     <RTKHome/>
//   </>
// };

// export default App;


import React, { useState } from "react";
import Home from './Home.jsx';
import RTKHome from "./RTKHome.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [showHome, setShowHome] = useState(true); // Initialize with Home component

  const handleShowHome = () => {
    setShowHome(true);
  };

  const handleShowRTKHome = () => {
    setShowHome(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex mt-10 justify-center space-x-3">
        <button
          className={`${showHome ? "bg-blue-500" : "bg-gray-500" // Selected and unselected button colors
            } rounded shadow p-2 font-bold text-white`}
          onClick={handleShowHome}
        >
          redux-tookit
        </button>
        <button
          className={`${!showHome ? "bg-blue-500" : "bg-gray-500" // Selected and unselected button colors
            } rounded shadow p-2 font-bold text-white`}
          onClick={handleShowRTKHome}
        >
          redux-tookit / RTK-query
        </button>
      </div>
      {showHome
        ? <Home />
        : <RTKHome />}
    </>
  );
};

export default App;
