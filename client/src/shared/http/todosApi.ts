import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ITodo} from "../../app/types";

const URL = process.env.REACT_APP_API_URL
const paramURL = 'api/todos'

export const todosApi = createApi({
    reducerPath: 'todosApi',
    tagTypes: ['Todos'],
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    endpoints: (build) => ({
        getTodos: build.query<ITodo[], void>({
            query:() => paramURL,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Todos' as const, id })),
                        { type: 'Todos', id: 'LIST' },
                    ]
                    : [{ type: 'Todos', id: 'LIST' }]
        }),
        addTodo: build.mutation({
            query: (body: ITodo) => ({
                url: paramURL,
                method: 'POST',
                body
            }),
            invalidatesTags: [{
                type: 'Todos', id: 'LIST'
            }]
        }),
        deleteTodo: build.mutation({
            query:(id) => ({
                url: `${paramURL}/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{
                type: 'Todos', id: 'LIST'
            }]
        })
    })
})

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } = todosApi