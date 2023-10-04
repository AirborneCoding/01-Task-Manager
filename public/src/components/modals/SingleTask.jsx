import React, { useEffect } from 'react';

// reduy/tookit
import { useDispatch, useSelector } from 'react-redux';
import { getSingleTask, updateTask } from '../../redux/Apis/taskApiCall';



// local states
import useLocalState from '../../utils/localState';

const SingleTask = ({ taskId, isOpen, onClose }) => {
 
 const dispatch = useDispatch();
 const { task } = useSelector(state => state.taskState);
 const { title, description, completed, setCompleted, setTitle, setDescription } = useLocalState({
  initialTitle: '',
  initialDescription: '',
  initialCompleted: false,
 });


 useEffect(() => {
  dispatch(getSingleTask(taskId));
 }, [dispatch, taskId]);

 useEffect(() => {
  if (task) {
   setTitle(task.title);
   setDescription(task.description);
   setCompleted(task.completed);
  }
 }, [task, setTitle, setDescription, setCompleted]);

 const handleSubmit = event => {
  event.preventDefault();
  const taskData = { title, description, completed };
  dispatch(updateTask(taskId, taskData));
  onClose();
 };

 if (!task) {
  return null;
 }

 return (
  <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`}>
   <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-60">
    <div className="form-father">
     <h2 className="text-xl font-semibold mb-5">Edit Task:</h2>
     <form onSubmit={handleSubmit} className="">
      <div className="form-row">
       <label htmlFor="title" className="form-label">Task Title :</label>
       <input
        id="title"
        type="text"
        className="form-input"
        // placeholder={title}
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
        // placeholder={description}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
       />
      </div>
      <div className="form-row flex items-center space-x-3">
       <input
        id="checkbox"
        type="checkbox"
        className=""
        // placeholder={completed}
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
       />
       <label htmlFor="checkbox" className="">Task completed :</label>
      </div>

      <div className="btn-container mt-5">
       <button
        type="submit"
        className="btn"
       >
        Save
       </button>
       <button
        type="button"
        onClick={onClose}
        className="ml-4 text-gray-500 hover:text-gray-700 font-semibold"
       >
        Cancel
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
};

export default SingleTask;



