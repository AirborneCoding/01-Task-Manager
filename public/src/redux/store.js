// import { configureStore } from '@reduxjs/toolkit';
// import taskReducer from './slices/taskSlice';
// const store = configureStore({
//  reducer: {
//   taskState: taskReducer,
//  },
// });
// export default store;


// store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice'
import { taskApiSlice } from './services/taskServices';



export const store = configureStore({
    reducer: {
        taskState: taskReducer,
        [taskApiSlice.reducerPath]: taskApiSlice.reducer,
        // Add other reducers if needed
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            taskApiSlice.middleware,
            // Add other middleware if needed
        );
    },
});
