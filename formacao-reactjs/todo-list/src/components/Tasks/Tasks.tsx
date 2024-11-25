import { useState } from 'react'

import { NewItem } from './NewItem/NewItem'
import { List } from './List/List'

import styles from './Tasks.module.css'

export interface ITask {
    id: number,
    content: string,
    isChecked: boolean
}

export function Tasks() {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [newTask, setNewTask] = useState('')

    const handleNewItem = () => {
        if(!newTask) return

        const item: ITask = {
            id: new Date().getTime(),
            content: newTask,
            isChecked: false
        }

        setTasks(state => [...state, item])
        setNewTask('')
    }

    const statusCounter = tasks.reduce((prev, current) => {
        if(current.isChecked) return prev + 1
        return prev
    }, 0)

    return (
        <main className={styles.tasksWrapper}>
            <NewItem  
                inputValue={newTask}
                changeEvent={evt => setNewTask(evt.target.value)}
                clickEvent={handleNewItem}
            />

           <List 
                items={tasks}
                statusCounter={statusCounter}
            />
        </main>
    );
}