import React from 'react';
import { useDeleteTaskMutation } from '../../../redux/services/taskServices';

const Delete = ({ taskId, isOpen, onClose }) => {
  const [deleteTask] = useDeleteTaskMutation();

  const deleteSingleTask = (taskId) => {
    deleteTask({ id: taskId })
    onClose()
  }

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-60">
        <div className="form-father">
          <p className='text-xl'>Are you sure you want to delete this task?</p>
          <div className="btn-container mt-8">
            <button
              className="btn-nc bg-red-500"
              onClick={() => deleteSingleTask(taskId)}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 text-gray-500 hover:text-gray-700 font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
