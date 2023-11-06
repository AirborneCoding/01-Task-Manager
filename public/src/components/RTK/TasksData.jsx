import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
    useFetchTasksQuery,
} from '../../redux/services/taskServices';

import SingleTask from './modals/SingleTask';
import Delete from './modals/Delete';

// icons
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"

const TaskList = () => {

    const { data, error, isError, isLoading } = useFetchTasksQuery()

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

    if (isLoading) {
        return <div className='loader'></div>;
    }

    if (isError) {
        return <div className='text-center mt-20 bg-slate-400 w-fit rounded mx-auto p-5'>
            {/* Error: {error.message} */}
            <h2>Ooops! something went wrong</h2>
        </div>;
    }

    return <section>

        <h2 className="text-xl font-semibold mb-4 md:col-span-2 lg:col-span-3">
            Task List {data?.count} :
        </h2>


        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                data?.tasks?.length < 1 ? "no tasks" :
                    data?.tasks?.map((item) => {
                        const { title, description, createdAt, completed, updatedAt, formattedCreateDate, formattedUpdateDate } = item
                        return <li
                            key={item._id}
                            className="bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-2xl"
                        >
                            <h3 className="text-lg font-semibold">{title || <Skeleton /> }</h3>
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
            }
        </ul>

        {/* {taskId && (
            <SingleTask taskId={taskId} isOpen={isModalOpen} onClose={handleCloseModal} />
        )} */}
        {taskId && (
            <SingleTask
                taskId={taskId}
                taskDataa={data?.tasks.find((task) => task._id === taskId)}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        )}

        {taskId && (
            <Delete taskId={taskId} isOpen={isModalOpenDelete} onClose={handleCloseModalDelete} />
        )}
    </section>;
};

export default TaskList;
