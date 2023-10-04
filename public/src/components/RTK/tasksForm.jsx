import React from 'react';
import { useAddTaskMutation } from '../../redux/services/taskServices';
import getFormValues from './helpers/getFormsValues';

function TasksForm({ taskToUpdate }) {
    const [addTask] = useAddTaskMutation();

    const onSubmit = async (e) => {
        e.preventDefault();

        const { data } = getFormValues(e.currentTarget)

        data.completed = data.completed === 'on';
        addTask(data)

        e.currentTarget.reset()

    }


    return (
        <form className="form-father" onSubmit={onSubmit}>
            <h2>{taskToUpdate ? 'Update Task' : 'Add Task'}</h2>
            <br /><br />
            <div className="form-row">
                <label htmlFor="title" className="form-label">Task Title :</label>
                <input
                    className='form-input'
                    type="text"
                    placeholder="Title"
                    name='title'
                />
            </div>
            <div className="form-row">
                <label htmlFor="description" className="form-label">Task Description :</label>
                <input
                    className='form-input'
                    type="text"
                    placeholder="Description"
                    name='description'
                />
            </div>
            <div className="form-row flex items-center space-x-3">
                <input
                    id="checkbox"
                    type="checkbox"
                    name='completed'
                    className=""
                // checked={completed}
                // onChange={(e) => setCompleted(e.target.checked)}
                />
                <label htmlFor="checkbox" className="">Task completed :</label>
            </div>
            <div className="form-row">
                <button
                    className='btn'
                    type="submit"
                >
                    {taskToUpdate ? 'Update' : 'Add'}
                </button>
            </div>
        </form>
    );
}

export default TasksForm;
