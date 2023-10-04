import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
    tagTypes: ["Tasks"],
    endpoints: (builder) => ({
        fetchTasks: builder.query({
            query: () => "/tasks",
            // transformResponse: (res) => res.sort((a, b) => b.id - a.id),
            transformResponse: (res) => {
                if (Array.isArray(res)) {
                    return res.sort((a, b) => b.id - a.id);
                } else {
                    // Handle the case where res is not an array
                    return res;
                }
            },
            providesTags: ["Tasks"],
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: "/tasks",
                method: "POST",
                body: task,
            }),
            invalidatesTags: ["Tasks"],
        }),
        updateTask: builder.mutation({
            query: (task) => ({
                url: `/tasks/${task.id}`,
                method: "PATCH",
                body: task,
            }),
            invalidatesTags: ["Tasks"],
        }),
        deleteTask: builder.mutation({
            query: ({ id }) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
                body: id,
            }),
            invalidatesTags: ["Tasks"],
        }),
        fetchSingleTasks: builder.query({
            query: ({ id }) => `/tasks/${id}`,
            // transformResponse: (res) => res.sort((a, b) => b.id - a.id),
            transformResponse: (res) => {
                if (Array.isArray(res)) {
                    return res.sort((a, b) => b.id - a.id);
                } else {
                    // Handle the case where res is not an array
                    return res;
                }
            },
            providesTags: ["Tasks"],
        }),
    }),
});

export const {
    useFetchTasksQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useFetchSingleTasksQuery,
} = taskApiSlice;

