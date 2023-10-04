import React from "react";
import {
    useUpdateTaskMutation,
} from '../../../redux/services/taskServices';
import getFormValues from "../../RTK/helpers/getFormsValues";

const SingleTask = ({ taskId, isOpen, onClose, taskDataa }) => {
    const { title: initialTitle, description: initialDescription, completed: initialCompleted } = taskDataa;

    const [updateTask] = useUpdateTaskMutation();

    const handleSubmit = (e) => {
        e.preventDefault();

        const { isEmpthy, data } = getFormValues(e.currentTarget);

        if (isEmpthy) return

        data.completed = data.completed === 'on';
        updateTask({ id: taskId, ...data });
        onClose();
    };

    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-60">
                <div className="form-father">
                    <h2 className="text-xl font-semibold mb-5">Edit Task:</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label htmlFor="title" className="form-label">Task Title :</label>
                            <input
                                id="title"
                                type="text"
                                className="form-input"
                                name="title"
                                defaultValue={initialTitle}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="description" className="form-label">Task Description :</label>
                            <input
                                id="description"
                                type="text"
                                className="form-input"
                                name="description"
                                defaultValue={initialDescription}
                            />
                        </div>
                        <div className="form-row flex items-center space-x-3">
                            <input
                                id="checkbox"
                                type="checkbox"
                                name="completed"
                                defaultChecked={initialCompleted}
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
