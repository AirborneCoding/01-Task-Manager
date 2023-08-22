import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  task: [],
  nbrOfTasks: null,
  loading: false,
  isEdit: false,
};

const postSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setTask: (state, action) => {
      state.task = action.payload;
    },
    addTask: (state, action) => {
      // state.tasks.push(action.payload);
      state.tasks.unshift(action.payload);
    },
    updatedTaskUI: (state, action) => {
      const updatedTask = action.payload;
      state.tasks = state.tasks.map((cate) =>
        cate._id === updatedTask._id ? { ...updatedTask } : cate
      );
    },
    deleteTaskUI: (state, action) => {
      state.tasks = state.tasks.filter((t) => t._id !== action.payload);
    },
    setnbrOfTasks: (state, action) => {
      state.nbrOfTasks = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

  },
});

export const {
  setTasks,
  addTask,
  setTask,
  setnbrOfTasks,
  setLoading,
  deleteTaskUI,
  updatedTaskUI
} = postSlice.actions;

export default postSlice.reducer;
