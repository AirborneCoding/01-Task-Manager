import React, { useState } from "react";
import TaskList from "./components/RTK/TasksData";
import TasksForm from "./components/RTK/tasksForm";

const RTKHome = () => {
    return <main className="body-container">
        <h2 className="text-center mt-16 uppercase underline font-bold text-2xl italic">Task Manager (redux-tookit/RTK-query) </h2>
        <TasksForm />
        <TaskList />
    </main>;
};

export default RTKHome;
