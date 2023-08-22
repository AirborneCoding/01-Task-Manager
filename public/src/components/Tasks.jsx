import React, { useEffect, useState } from "react";
// components
import SingleTask from "./modals/SingleTask";
import Delete from "./modals/Delete";

// redux toolkit
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from "../redux/Apis/taskApiCall";

// icons
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"



const Tasks = () => {
  // redux toolkit
  const dispatch = useDispatch()
  const { tasks, loading, nbrOfTasks } = useSelector(state => state.taskState)

  // Fetch data
  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  // open modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const handleOpenModal = (taskId) => {
    setTaskId(taskId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setTaskId(null);
    setIsModalOpen(false);
  };

  // open modal delete
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const handleOpenModalDelete = (taskId) => {
    setTaskId(taskId);
    setIsModalOpenDelete(true)
  };

  const handleCloseModalDelete = () => {
    setTaskId(null);
    setIsModalOpenDelete(false)
  };

  return <section>

    <h2 className="text-xl font-semibold mb-4 md:col-span-2 lg:col-span-3">
      Task List {nbrOfTasks} :
    </h2>


    <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        loading ?
          <p>Loading...</p>
          :
          (
            tasks.length < 1 ? "no tasks" :
              tasks?.map((item) => {
                const { title, description, createdAt, completed, updatedAt, formattedCreateDate, formattedUpdateDate } = item
                return <li
                  key={item._id}
                  className="bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-2xl"
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                  <p className={`mt-2 ${completed ? 'text-green-600' : 'text-red-600'}`}>
                    {completed ? 'Completed' : 'Not Completed'}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Created: {formattedCreateDate}
                  </p>
                  <p className="text-sm text-gray-400">
                    Updated: {formattedUpdateDate}
                  </p>
                  <div className="btn-container mt-5">
                    <button
                      className="mr-3 text-green-800"
                      onClick={() => handleOpenModal(item._id)}><BiEdit size={22} /></button>
                    <button
                      className="text-red-800"
                      onClick={() => handleOpenModalDelete(item._id)}
                    ><AiFillDelete size={22} /></button>
                  </div>
                </li>
              })
          )
      }
    </ul>

    {taskId && (
      <SingleTask taskId={taskId} isOpen={isModalOpen} onClose={handleCloseModal} />
    )}
    {taskId && (
      <Delete taskId={taskId} isOpen={isModalOpenDelete} onClose={handleCloseModalDelete} />
    )}
  </section>;
};

export default Tasks;
