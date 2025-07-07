import { createContext, useContext, useState } from "react";
import { createTasksRequest, getTasksRequest } from "../api/task";

const TaskContext = createContext()

export const useTasks = () => {
    const context = useContext(TaskContext)

    if (!context) {
        throw new Error('useTaks must be used within a TaksProvider')
    }

    return context
}

export function TaksProvider({ children }) {
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        try {
            const res = await getTasksRequest()
            setTasks(res.data)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const createTask = async (task) => {
        console.log('task');
        const res = await createTasksRequest(task)
        console.log(res);
    }

    return(
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks
            }}>
            {children}
        </TaskContext.Provider>
    )
}