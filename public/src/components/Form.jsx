import React from "react";

// localStates
import useLocalState from '../utils/localState';

// redux/tookit
import { useDispatch } from 'react-redux';
import { createTask } from "../redux/Apis/taskApiCall";

function Form() {
 const dispatch = useDispatch()
 const { title, description, completed, setCompleted, setTitle, setDescription } = useLocalState();

 const handleSubmit = (e) => {
  e.preventDefault()

  const taskData = { title, description, completed }
  // console.log(taskData);

  dispatch(createTask(taskData))

  setTitle("")
  setDescription("")
  setCompleted(false)
 }

 return <form className="form-father" onSubmit={handleSubmit}>
  <div className="form-row">
   <label htmlFor="title" className="form-label">Task Title :</label>
   <input
    id="title"
    type="text"
    className="form-input"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
   />
  </div>
  <div className="form-row">
   <label htmlFor="description" className="form-label">Task Description :</label>
   <input
    id="description"
    type="text"
    className="form-input"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
   />
  </div>
  <div className="form-row flex items-center space-x-3">
   <input
    id="checkbox"
    type="checkbox"
    className=""
    checked={completed}
    onChange={(e) => setCompleted(e.target.checked)}
   />
   <label htmlFor="checkbox" className="">Task completed :</label>
  </div>
  <div className="form-row">
   <button className="btn">Add Task</button>
  </div>
 </form>;
}

export default Form;
