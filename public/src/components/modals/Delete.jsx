import React from 'react';
// redux toolkit
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/Apis/taskApiCall';



const Delete = ({ taskId, isOpen, onClose }) => {
  // console.log(taskId);
  
  const dispatch = useDispatch()

  const deleteSingleTask = () => {
    dispatch(deleteTask(taskId))
    onClose()
  }


  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-60">
        <div className="form-father">
          <p className='text-xl'>Are you sure you want to delete this task ?</p>
          <div className="btn-container mt-8">
            <button
              className="btn-nc bg-red-500"
              onClick={deleteSingleTask}
            >Delete</button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 text-gray-500 hover:text-gray-700 font-semibold"
            >Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
