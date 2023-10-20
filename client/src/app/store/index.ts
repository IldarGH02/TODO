import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../../shared/http/todosApi";

const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store