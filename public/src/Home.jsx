import React, { useEffect, useState } from "react";

// components
import Form from "./components/Form";
import Tasks from "./components/Tasks";
// import FilterTasks from "./components/FilterTasks";

// localStates
import useLocalState from './utils/localState';

const Home = () => {

    // sorting 
    const { title, completed, setCompleted, setTitle } = useLocalState();



    return <main className="body-container">
        <h2 className="text-center mt-16 uppercase underline font-bold text-2xl italic">Task Manager (redux-tookit) </h2>
        <Form title={title} completed={completed} setCompleted={setCompleted} setTitle={setTitle} />
        <div className="mx-8 px-4">
            {/* <FilterTasks title={title} completedForSort={completedForSort} setCompletedForSort={setCompletedForSort} setTitle={setTitle} /> */}
        </div>
        <Tasks />
    </main >
};

export default Home;
