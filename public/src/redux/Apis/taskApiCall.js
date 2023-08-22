import axios from 'axios';
import {
  setTasks,
  setnbrOfTasks,
  setLoading,
  setTask,
  deleteTaskUI,
  addTask,
  updatedTaskUI
} from '../slices/taskSlice';

import { toast } from 'react-toastify';
function displayToast(message, type) {
  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  switch (type) {
    case "success":
      toast.success(message, toastConfig);
      break;
    case "warn":
      toast.warn(message, toastConfig);
      break;
    case "error":
      toast.error(message, toastConfig);
      break;
    default:
      toast.info(message, toastConfig);
      break;
  }
}

// fetch all tasks
export function getAllTasks() {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const response = await axios.get('api/v1/tasks');
      dispatch(setTasks(response.data.tasks));

      dispatch(setnbrOfTasks(response.data.count));

      dispatch(setLoading(false));
    } catch (error) {
      console.log(error.response.data.message);
      dispatch(setLoading(false));
    }
  };
}

// fetch single task
export function getSingleTask(taskId) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/tasks/${taskId}`);
      dispatch(setTask(response.data.task));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
}

// delete task
export function deleteTask(taskId) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/v1/tasks/${taskId}`);
      dispatch(deleteTaskUI(taskId))

      const responseCount = await axios.get(`/api/v1/tasks/count`);
      dispatch(setnbrOfTasks(responseCount.data.tasks))

      displayToast(response.data.msg, "success");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
}

// get tasks count
export function getTasksCount() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/v1/tasks/count`);
      dispatch(setnbrOfTasks(response.data.tasks))
      
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
}

// create task
export function createTask(newTask) {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/v1/tasks", newTask)
      dispatch(addTask(response.data.task))

      const responseCount = await axios.get(`/api/v1/tasks/count`);
      dispatch(setnbrOfTasks(responseCount.data.tasks))

      displayToast(response.data.msg, "success")
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
      displayToast(error.response.data.msg, "warn")
    }
  }
}

// update task
export function updateTask(taskId, newTask) {
  return async (dispatch) => {
    try {
      const response = await axios.patch(`/api/v1/tasks/${taskId}`, newTask)
      dispatch(updatedTaskUI(response.data.task))

      displayToast(response.data.msg, "success")
    } catch (error) {
      console.log(error.response.data.message);
      displayToast(response.data.msg, "error")
    }
  }
}