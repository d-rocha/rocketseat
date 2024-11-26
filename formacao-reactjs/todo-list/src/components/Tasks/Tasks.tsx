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

    const handeChangeInputValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(evt.target.value)
    }

    const handleRemoveItem = (id: number) => {
        const updateTasks = tasks.filter(item => item.id !== id)    
      
        setTasks(updateTasks)
    }

    const handleItemStatus = (id: number, hasChecked: boolean) => {
        const updateTasks = tasks.map(item => {
            if(item.id === id)
                return { ...item, isChecked: hasChecked }

            return { ...item }
        })

        setTasks(updateTasks)
    }

    const statusCounter = tasks.reduce((prev, current) => {
        if(current.isChecked) return prev + 1
        return prev
    }, 0)

    return (
        <main className={styles.tasksWrapper}>
            <NewItem  
                inputValue={newTask}
                changeEvent={handeChangeInputValue}
                clickEvent={handleNewItem}
            />

           <List 
                items={tasks}
                statusCounter={statusCounter}
                removeEvent={handleRemoveItem}
                statusEvent={handleItemStatus}
            />
        </main>
    );
}