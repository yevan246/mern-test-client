import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todoApiSlice = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/todos/'}),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/',
            providesTags: ['OurTodos']
        }),
        addTodo: builder.mutation({
            query: (newTodo) => ({
                url: '/',
                method: 'POST',
                body: newTodo
            }),
            invalidatesTags: ['OurTodos']
        }),
        deleteToDo: builder.mutation({
            query: (id) => ({
                method: 'DELETE',
                url: `/${id}`,
            }),
            invalidatesTags: ['OurTodos']
        }),
        updateToDo: builder.mutation({
            query: ({id, done, text}) => ({
                method: 'PUT',
                url: `/${id}`,
                body: {done, text},
            }),
            invalidatesTags: ['OurTodos']
        })
    })
})

export const {useGetTodosQuery, useAddTodoMutation, useDeleteToDoMutation, useUpdateToDoMutation} = todoApiSlice