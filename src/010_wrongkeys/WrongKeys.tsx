import { useState } from "react"

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const tasks1 = [
    { id: 1, title: 'Learn React', isDone: true },
    { id: 2, title: 'Learn TypeScript', isDone: false },
    { id: 3, title: 'Learn React Router', isDone: false },
]

const tasks2 = [
    { id: 1, title: 'Learn React', isDone: true },
    { id: 2, title: 'Learn React Router', isDone: false },
]


export function WrongKeys() {

    const [tasks,setTasks] = useState<TaskType[]>(tasks1)
    const switchTasks = () => {
        if (tasks.length == 3) {
            setTasks(tasks2)
        } else {
            setTasks(tasks1)
        }
    }


    return (
        <div>
            <ul>
                {tasks.map(task => <li key={task.id}>{task.title}</li>)}
            </ul>
            <button onClick={switchTasks}>Change</button>
        </div>
    )

}