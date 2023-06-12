import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from './todoSlice/todosSlice.jsx'

const store = configureStore({
    reducer: {
        todos: tasksReducer
    }
})

export default store